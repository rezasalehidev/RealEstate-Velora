import { useEffect, useRef } from 'react'

/**
 * Scroll-driven 3D frame scrubbing.
 * Uses a compressed WebP image sequence instead of seeking an MP4 —
 * more reliable on mobile/CDN and much lighter for Vercel deploys.
 */

const FRAME_COUNT = 72
const SCRUB_END_PROGRESS = 0.72
const FRAME_PAD = 3
const COVER_SCALE = 1.06 // crops AI watermark at bottom-right edge

function frameSrc(index: number) {
  return `/hero-frames/frame-${String(index).padStart(FRAME_PAD, '0')}.webp`
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number,
) {
  const ir = img.naturalWidth / img.naturalHeight
  const cr = width / height
  let dw: number
  let dh: number
  if (ir > cr) {
    dh = height * COVER_SCALE
    dw = dh * ir
  } else {
    dw = width * COVER_SCALE
    dh = dw / ir
  }
  const dx = (width - dw) / 2
  const dy = (height - dh) / 2
  ctx.clearRect(0, 0, width, height)
  ctx.drawImage(img, dx, dy, dw, dh)
}

export function useScrollVideo() {
  const containerRef = useRef<HTMLElement>(null)
  const videoLayerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const initialContentRef = useRef<HTMLDivElement>(null)
  const climaxContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const videoLayer = videoLayerRef.current
    const canvas = canvasRef.current
    const overlay = overlayRef.current
    const initialContent = initialContentRef.current
    const climaxContent = climaxContentRef.current

    if (!container || !videoLayer || !canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 767px)').matches

    const frames: (HTMLImageElement | null)[] = Array.from({ length: FRAME_COUNT }, () => null)
    let loadedCount = 0
    let currentFrame = 0
    let targetFrame = 0
    let animFrameId: number | null = null
    let isRunning = true
    let isVisible = true
    let hasUserInteracted = window.scrollY > 5
    let autoplayFrame = 0
    let lastAutoplayTs = 0

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { clientWidth, clientHeight } = canvas
      const w = Math.max(1, Math.round(clientWidth * dpr))
      const h = Math.max(1, Math.round(clientHeight * dpr))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
      const img = frames[currentFrame]
      if (img?.complete && img.naturalWidth) {
        drawCover(ctx, img, canvas.width, canvas.height)
      }
    }

    const paintFrame = (index: number) => {
      const clamped = Math.max(0, Math.min(FRAME_COUNT - 1, index))
      const img = frames[clamped]
      if (!img?.complete || !img.naturalWidth) return
      currentFrame = clamped
      drawCover(ctx, img, canvas.width, canvas.height)
    }

    const preloadFrame = (index: number) =>
      new Promise<void>((resolve) => {
        if (frames[index]) {
          resolve()
          return
        }
        const img = new Image()
        img.decoding = 'async'
        img.onload = () => {
          frames[index] = img
          loadedCount += 1
          if (index === 0 || index === currentFrame) {
            paintFrame(index)
          }
          resolve()
        }
        img.onerror = () => resolve()
        img.src = frameSrc(index + 1)
      })

    // Prioritize first frame for instant paint, then load the rest
    void preloadFrame(0).then(async () => {
      resizeCanvas()
      paintFrame(0)
      const batch = 6
      for (let i = 1; i < FRAME_COUNT; i += batch) {
        if (!isRunning) return
        await Promise.all(
          Array.from({ length: batch }, (_, j) => {
            const idx = i + j
            return idx < FRAME_COUNT ? preloadFrame(idx) : Promise.resolve()
          }),
        )
      }
    })

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const lockScrollControl = () => {
      hasUserInteracted = true
    }

    window.addEventListener('wheel', lockScrollControl, { passive: true })
    window.addEventListener('touchmove', lockScrollControl, { passive: true })
    window.addEventListener('keydown', lockScrollControl, { passive: true })

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (isVisible && isRunning && animFrameId === null) {
          animFrameId = requestAnimationFrame(render)
        }
      },
      { rootMargin: '250px 0px 250px 0px' },
    )
    observer.observe(container)

    const render = (ts: number) => {
      if (!isRunning || !isVisible) {
        animFrameId = null
        return
      }

      const rect = container.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      const rawProgress = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0

      if (rawProgress > 0.001 || window.scrollY > 2) {
        lockScrollControl()
      }

      if (reducedMotion) {
        videoLayer.style.opacity = String(1 - rawProgress)
        videoLayer.style.transform = 'none'
        if (overlay) overlay.style.opacity = String(1 - rawProgress)
        if (initialContent) {
          initialContent.style.opacity = String(1 - rawProgress * 2)
          initialContent.style.pointerEvents = rawProgress > 0.4 ? 'none' : 'auto'
        }
        paintFrame(0)
        animFrameId = requestAnimationFrame(render)
        return
      }

      if (hasUserInteracted) {
        if (rawProgress <= SCRUB_END_PROGRESS) {
          const videoProgress = rawProgress / SCRUB_END_PROGRESS
          targetFrame = Math.round(videoProgress * (FRAME_COUNT - 1))
        } else {
          targetFrame = FRAME_COUNT - 1
        }

        if (targetFrame !== currentFrame) {
          // Step toward target so scrubbing stays smooth if frames are still loading
          const step = targetFrame > currentFrame ? 1 : -1
          let next = currentFrame
          for (let i = 0; i < 4; i++) {
            const candidate = next + step
            if (candidate === targetFrame || frames[candidate]?.complete) {
              next = candidate
              if (candidate === targetFrame) break
            } else {
              break
            }
          }
          paintFrame(next === currentFrame ? targetFrame : next)
        }
      } else if (loadedCount > 1) {
        // Gentle idle loop until the user scrolls
        if (!lastAutoplayTs) lastAutoplayTs = ts
        if (ts - lastAutoplayTs > 70) {
          lastAutoplayTs = ts
          autoplayFrame = (autoplayFrame + 1) % Math.min(loadedCount, FRAME_COUNT)
          paintFrame(autoplayFrame)
        }
      }

      if (initialContent) {
        if (rawProgress <= 0.18) {
          const p = rawProgress / 0.16
          const opacity = Math.max(0, 1 - p)
          const translateY = -p * 35
          initialContent.style.opacity = opacity.toFixed(3)
          initialContent.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`
          initialContent.style.pointerEvents = p > 0.5 ? 'none' : 'auto'
          initialContent.style.visibility = opacity <= 0 ? 'hidden' : 'visible'
        } else {
          initialContent.style.opacity = '0'
          initialContent.style.pointerEvents = 'none'
          initialContent.style.visibility = 'hidden'
        }
      }

      if (climaxContent) {
        if (rawProgress >= 0.72 && rawProgress <= 0.98) {
          let cp = 0
          if (rawProgress < 0.82) {
            cp = (rawProgress - 0.72) / 0.1
          } else if (rawProgress <= 0.91) {
            cp = 1
          } else {
            cp = Math.max(0, 1 - (rawProgress - 0.91) / 0.07)
          }

          const translateY = (1 - cp) * 24
          climaxContent.style.opacity = cp.toFixed(3)
          climaxContent.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`
          climaxContent.style.pointerEvents = cp > 0.5 ? 'auto' : 'none'
          climaxContent.style.visibility = cp <= 0 ? 'hidden' : 'visible'
        } else {
          climaxContent.style.opacity = '0'
          climaxContent.style.pointerEvents = 'none'
          climaxContent.style.visibility = 'hidden'
        }
      }

      if (rawProgress <= SCRUB_END_PROGRESS) {
        videoLayer.style.opacity = '1'
        videoLayer.style.transform = 'translate3d(0, 0, 0) scale(1)'
        videoLayer.style.filter = 'none'
      } else {
        const transitionP = (rawProgress - SCRUB_END_PROGRESS) / (1 - SCRUB_END_PROGRESS)
        const vOpacity = Math.max(0, 1 - transitionP * 0.85)
        const vScale = isMobile ? 1 : 1 + transitionP * 0.04
        const vTranslateY = isMobile ? 0 : -transitionP * 3

        videoLayer.style.opacity = vOpacity.toFixed(3)
        videoLayer.style.transform = `translate3d(0, ${vTranslateY.toFixed(1)}%, 0) scale(${vScale.toFixed(4)})`
      }

      if (overlay) {
        if (rawProgress <= 0.16) {
          overlay.style.opacity = (1 - rawProgress * 1.5).toFixed(3)
        } else if (rawProgress <= SCRUB_END_PROGRESS) {
          overlay.style.opacity = '0.2'
        } else {
          const op = 0.2 + (rawProgress - SCRUB_END_PROGRESS) * 1.8
          overlay.style.opacity = Math.min(0.85, op).toFixed(3)
        }
      }

      if (rawProgress >= 0.99) {
        videoLayer.style.visibility = 'hidden'
      } else {
        videoLayer.style.visibility = 'visible'
      }

      animFrameId = requestAnimationFrame(render)
    }

    animFrameId = requestAnimationFrame(render)

    return () => {
      isRunning = false
      if (animFrameId) cancelAnimationFrame(animFrameId)
      observer.disconnect()
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('wheel', lockScrollControl)
      window.removeEventListener('touchmove', lockScrollControl)
      window.removeEventListener('keydown', lockScrollControl)
    }
  }, [])

  return {
    containerRef,
    videoLayerRef,
    canvasRef,
    overlayRef,
    initialContentRef,
    climaxContentRef,
  }
}
