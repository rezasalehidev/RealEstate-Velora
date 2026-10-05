import SearchBar from '../components/SearchBar'
import { ArrowRightIcon } from '../components/icons'
import { Link } from 'react-router-dom'
import { useScrollVideo } from '../hooks/useScrollVideo'

export default function Hero() {
  const {
    containerRef,
    videoLayerRef,
    videoRef,
    overlayRef,
    initialContentRef,
    climaxContentRef,
    hudRef,
    hudProgressBarRef,
    hudTimeRef,
    hudChapterRef,
  } = useScrollVideo()

  return (
    <section ref={containerRef} className="hero-scroll-container">
      <div className="hero-sticky">
        {/* Video layer — full-bleed cinematic 3D walkthrough */}
        <div
          ref={videoLayerRef}
          className="hero-video-layer"
          aria-label="Interactive 3D architectural fly-through of luxury modern home."
        >
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
          >
            <source src="/hero-3d.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Cinematic gradient overlay */}
        <div ref={overlayRef} className="hero-overlay" aria-hidden="true" />

        {/* 1. Initial Hero Content (Active at 0% scroll, fades gently on scroll down) */}
        <div ref={initialContentRef} className="hero-initial-content">
          {/* Main Hero Header */}
          <div className="container-premium flex-1 flex flex-col items-center justify-center text-center pt-16 lg:pt-20">
            <p className="eyebrow text-white/80 mb-5">PREMIUM PROPERTIES. BETTER LIVING.</p>
            <h1 className="text-hero font-bold text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
              Find Your<br />
              Dream Home{' '}
              <span className="font-script text-champagne-light text-5xl lg:text-6xl">with Everlight</span>
            </h1>
            <p className="text-lg text-white/90 mt-6 max-w-md leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)]">
              Discover modern homes, prime locations, and lifestyle-driven communities — all in one place.
            </p>
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              <Link to="/properties" className="btn-primary">
                Browse Properties <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* Search bar pinned toward bottom + scroll hint */}
          <div className="container-premium pb-6 lg:pb-8 flex flex-col items-center gap-4">
            <div className="w-full max-w-4xl mx-auto relative">
              <SearchBar />
            </div>

            {/* Subtle scroll scrub hint */}
            <div className="hidden sm:flex items-center gap-2 text-white/60 text-xs font-medium uppercase tracking-widest pt-1 animate-pulse">
              <span>Scroll down to scrub 3D tour</span>
              <svg className="w-3.5 h-3.5 text-champagne" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* 2. Interactive 3D Scrubber HUD (Visible during the 3D tour scrubbing) */}
        <div ref={hudRef} className="hero-hud" aria-hidden="true">
          <div className="bg-navy-950/80 backdrop-blur-md border border-white/15 text-white rounded-full px-4 sm:px-5 py-2.5 shadow-2xl flex items-center gap-3 sm:gap-4 max-w-[92vw]">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-champagne animate-ping" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-champagne font-bold uppercase">
                3D TIMELINE
              </span>
            </div>

            <span className="w-px h-3.5 bg-white/20 shrink-0" />

            {/* Real-time Chapter name */}
            <span
              ref={hudChapterRef}
              className="text-xs font-semibold text-white/95 tracking-wide whitespace-nowrap"
            >
              01 // SUNSET EXTERIOR & PATIO
            </span>

            <span className="w-px h-3.5 bg-white/20 shrink-0 hidden sm:block" />

            {/* Dynamic Scrubber track + live timestamp */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="w-20 sm:w-28 h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div
                  ref={hudProgressBarRef}
                  className="h-full bg-champagne rounded-full origin-left will-change-transform"
                  style={{ transform: 'scaleX(0)' }}
                />
              </div>
              <span
                ref={hudTimeRef}
                className="text-[10px] sm:text-[11px] font-mono text-champagne-light shrink-0"
              >
                00:00.0s / 00:05.1s
              </span>
            </div>

            <span className="hidden md:inline text-[10px] text-white/50 tracking-wider uppercase shrink-0 border-l border-white/20 pl-3">
              ↕ Scroll to scrub
            </span>
          </div>
        </div>

        {/* 3. Hero Climax Content (Becomes dominant as video reaches final frame) */}
        <div ref={climaxContentRef} className="hero-climax-content">
          <div className="container-premium text-center max-w-2xl px-6 py-8 sm:py-10 rounded-3xl bg-navy-950/90 backdrop-blur-xl border border-champagne/30 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
            <span className="eyebrow text-champagne tracking-[0.25em] text-xs font-semibold">
              ARCHITECTURAL EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 font-serif drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)] leading-tight">
              Crafted for the Extraordinary
            </h2>
            <p className="text-white/90 text-sm sm:text-base mt-4 max-w-lg mx-auto leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
              Where visionary 3D design meets California luxury. Every home in our curated portfolio represents timeless architecture and refined living.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
              <Link to="/properties" className="btn-accent shadow-lg shadow-champagne/20">
                Explore Properties <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white focus:outline-none focus:ring-2 focus:ring-champagne"
              >
                Schedule Private Viewing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
