import { useEffect, useRef } from 'react'

/**
 * Scroll-driven 3D Video Scrubbing Hook.
 *
 * Maps user scroll position directly to the 3D video playback timeline:
 * - Scroll DOWN: Video scrubs forward frame-by-frame from 0.0s to end.
 * - Scroll UP: Video smoothly scrubs backward frame-by-frame.
 * - Stopped scrolling: Video holds the exact frame.
 * - rAF loop + lerp interpolation: butter-smooth, jitter-free 60fps performance.
 * - Non-blocking seeking: coordinates with browser decode pipeline (seeked event / fastSeek).
 * - Zero React re-renders during scrubbing (all direct DOM ref mutations).
 */

const FALLBACK_DURATION = 5.125
const SCRUB_END_PROGRESS = 0.72 // Video scrubbing spans 0% to 72% of the Hero scroll timeline

export function useScrollVideo() {
  const containerRef = useRef<HTMLElement>(null)
  const videoLayerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const initialContentRef = useRef<HTMLDivElement>(null)
  const climaxContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const videoLayer = videoLayerRef.current
    const video = videoRef.current
    const overlay = overlayRef.current
    const initialContent = initialContentRef.current
    const climaxContent = climaxContentRef.current

    if (!container || !videoLayer || !video) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 767px)').matches

    let videoDuration = FALLBACK_DURATION
    if (video.duration && isFinite(video.duration) && video.duration > 0) {
      videoDuration = video.duration
    }

    const onLoadedMetadata = () => {
      if (video.duration && isFinite(video.duration) && video.duration > 0) {
        videoDuration = video.duration
      }
    }
    video.addEventListener('loadedmetadata', onLoadedMetadata)

    // State tracking variables
    let hasUserInteracted = window.scrollY > 5
    let targetTime = 0
    let smoothedTime = 0
    let isSeeking = false
    let pendingTargetTime: number | null = null
    let animFrameId: number | null = null
    let isRunning = true

    // Initial entrance behavior:
    // If user is at scroll 0, start muted autoplay until the first interaction.
    // If user has already scrolled, pause immediately.
    if (!reducedMotion && !hasUserInteracted) {
      video.play().catch(() => {
        video.pause()
      })
    } else {
      video.pause()
    }

    // Direct seeking function that prevents decode flooding
    const seekTo = (time: number) => {
      if (!video || !isFinite(time)) return
      const clamped = Math.max(0, Math.min(videoDuration - 0.01, time))

      if (isSeeking || video.seeking) {
        pendingTargetTime = clamped
        return
      }

      if (Math.abs(video.currentTime - clamped) < 0.012) {
        return
      }

      try {
        isSeeking = true
        if ('fastSeek' in video && typeof (video as any).fastSeek === 'function') {
          (video as any).fastSeek(clamped)
        } else {
          video.currentTime = clamped
        }
      } catch {
        video.currentTime = clamped
      }
    }

    const onSeeked = () => {
      isSeeking = false
      if (pendingTargetTime !== null) {
        const next = pendingTargetTime
        pendingTargetTime = null
        seekTo(next)
      }
    }
    video.addEventListener('seeked', onSeeked)

    // Lock scroll control on ANY user interaction
    const lockScrollControl = () => {
      if (!hasUserInteracted) {
        hasUserInteracted = true
        if (!video.paused) {
          video.pause()
        }
      }
    }

    window.addEventListener('wheel', lockScrollControl, { passive: true })
    window.addEventListener('touchmove', lockScrollControl, { passive: true })
    window.addEventListener('keydown', lockScrollControl, { passive: true })

    // Continuous 60fps render loop
    const render = () => {
      if (!isRunning) return

      const rect = container.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      const rawProgress = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0

      // If user scrolls at all, lock video playback to scroll
      if (rawProgress > 0.001 || window.scrollY > 2) {
        lockScrollControl()
      }

      if (reducedMotion) {
        // Fallback for reduced motion
        videoLayer.style.opacity = String(1 - rawProgress)
        videoLayer.style.transform = 'none'
        if (overlay) overlay.style.opacity = String(1 - rawProgress)
        if (initialContent) {
          initialContent.style.opacity = String(1 - rawProgress * 2)
          initialContent.style.pointerEvents = rawProgress > 0.4 ? 'none' : 'auto'
        }
        animFrameId = requestAnimationFrame(render)
        return
      }

      if (hasUserInteracted) {
        // --- 1. Video Timeline Scrubbing ---
        if (rawProgress <= SCRUB_END_PROGRESS) {
          const videoProgress = rawProgress / SCRUB_END_PROGRESS
          targetTime = videoProgress * videoDuration
        } else {
          targetTime = videoDuration - 0.01 // Hold final frame
        }

        // Lerp smoothedTime toward targetTime for smooth momentum
        const timeDelta = targetTime - smoothedTime
        if (Math.abs(timeDelta) > 0.001) {
          // Responsive lerp: 0.22 for mobile/desktop creates smooth glide without perceptible lag
          smoothedTime += timeDelta * 0.22
          if (Math.abs(targetTime - smoothedTime) < 0.004) {
            smoothedTime = targetTime
          }
          seekTo(smoothedTime)
        } else if (pendingTargetTime !== null && !isSeeking && !video.seeking) {
          const next = pendingTargetTime
          pendingTargetTime = null
          seekTo(next)
        }
      }

      // --- 2. Initial Hero Content Fade Out (0.0 -> 0.16) ---
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

      // --- 4. Climax Content Emergence (0.72 -> 1.0) ---
      // Strictly hidden until video finishes its 3D camera flight!
      if (climaxContent) {
        if (rawProgress >= 0.72 && rawProgress <= 0.98) {
          let cp = 0
          if (rawProgress < 0.82) {
            // Smooth entrance: 0.72 -> 0.82
            cp = (rawProgress - 0.72) / 0.10
          } else if (rawProgress <= 0.91) {
            // Prominent hero focus: 0.82 -> 0.91
            cp = 1
          } else {
            // Gentle dissolve as section releases: 0.91 -> 0.98
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

      // --- 5. Video Layer Cinematic Transformation ---
      if (rawProgress <= SCRUB_END_PROGRESS) {
        // While user is scrubbing through the 3D tour
        videoLayer.style.opacity = '1'
        videoLayer.style.transform = 'translate3d(0, 0, 0) scale(1)'
        videoLayer.style.filter = 'none'
      } else {
        // Final transition: subtle scale and fade as next section enters
        const transitionP = (rawProgress - SCRUB_END_PROGRESS) / (1 - SCRUB_END_PROGRESS)
        const vOpacity = Math.max(0, 1 - transitionP * 0.85)
        const vScale = isMobile ? 1 : 1 + transitionP * 0.04
        const vTranslateY = isMobile ? 0 : -transitionP * 3

        videoLayer.style.opacity = vOpacity.toFixed(3)
        videoLayer.style.transform = `translate3d(0, ${vTranslateY.toFixed(1)}%, 0) scale(${vScale.toFixed(4)})`
      }

      // --- 6. Overlay Dynamics ---
      if (overlay) {
        if (rawProgress <= 0.16) {
          // Stronger overlay at very top for hero text contrast
          overlay.style.opacity = (1 - rawProgress * 1.5).toFixed(3)
        } else if (rawProgress <= SCRUB_END_PROGRESS) {
          // Minimalist vignette during 3D video scrubbing for crystal clarity
          overlay.style.opacity = '0.2'
        } else {
          // Deepen overlay slightly as transition begins
          const op = 0.2 + (rawProgress - SCRUB_END_PROGRESS) * 1.8
          overlay.style.opacity = Math.min(0.85, op).toFixed(3)
        }
      }

      // Performance: hide video when completely scrolled past
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
      window.removeEventListener('wheel', lockScrollControl)
      window.removeEventListener('touchmove', lockScrollControl)
      window.removeEventListener('keydown', lockScrollControl)
      video.removeEventListener('loadedmetadata', onLoadedMetadata)
      video.removeEventListener('seeked', onSeeked)
    }
  }, [])

  return {
    containerRef,
    videoLayerRef,
    videoRef,
    overlayRef,
    initialContentRef,
    climaxContentRef,
  }
}
