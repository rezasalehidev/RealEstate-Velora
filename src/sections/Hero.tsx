import SearchBar from '../components/SearchBar'
import { ArrowRightIcon } from '../components/icons'
import { Link } from 'react-router-dom'
import { useScrollVideo } from '../hooks/useScrollVideo'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const {
    containerRef,
    videoLayerRef,
    canvasRef,
    overlayRef,
    initialContentRef,
    climaxContentRef,
  } = useScrollVideo()

  const { t, isRTL, language } = useLanguage()

  return (
    <section ref={containerRef} className="hero-scroll-container">
      <div className="hero-sticky">
        {/* Frame sequence — full-bleed cinematic 3D walkthrough (scroll-scrubbed) */}
        <div
          ref={videoLayerRef}
          className="hero-video-layer"
          aria-label="Interactive 3D architectural fly-through of luxury modern home."
        >
          <img
            className="hero-poster"
            src="/hero-frames/poster.webp"
            alt=""
            aria-hidden="true"
            decoding="async"
          />
          <canvas ref={canvasRef} className="hero-frame-canvas" aria-hidden="true" />
        </div>

        {/* Cinematic gradient overlay */}
        <div ref={overlayRef} className="hero-overlay" aria-hidden="true" />

        {/* 1. Initial Hero Content (Active at 0% scroll, fades gently on scroll down) */}
        <div ref={initialContentRef} className="hero-initial-content">
          {/* Main Hero Header */}
          <div className="container-premium flex-1 flex flex-col items-center justify-center text-center pt-16 lg:pt-20">
            <p className="eyebrow text-white/80 mb-5">{t('heroEyebrow')}</p>
            <h1 className="text-hero font-bold text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
              {t('heroTitlePrefix')}<br />
              {t('heroTitleMiddle')}{' '}
              <span className={`text-champagne-light text-5xl lg:text-6xl ${language === 'fa' ? 'font-bold' : 'font-script'}`}>
                {t('heroTitleSuffix')}
              </span>
            </h1>
            <p className="text-lg text-white/90 mt-6 max-w-md leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)]">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              <Link to="/properties" className="btn-primary">
                <span>{t('heroBrowseBtn')}</span>
                <ArrowRightIcon className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-transparent"
              >
                {t('heroExpertBtn')}
              </Link>
            </div>
          </div>

          {/* Search bar pinned toward bottom */}
          <div className="container-premium pb-8 lg:pb-12 flex flex-col items-center">
            <div className="w-full max-w-4xl mx-auto relative">
              <SearchBar />
            </div>
          </div>
        </div>

        {/* 2. Hero Climax Content (Becomes dominant as video reaches final frame) */}
        <div ref={climaxContentRef} className="hero-climax-content">
          <div className="container-premium text-center max-w-2xl px-6 py-8 sm:py-10 rounded-3xl bg-navy-950/90 backdrop-blur-xl border border-champagne/30 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
            <span className="eyebrow text-champagne tracking-[0.25em] text-xs font-semibold">
              {t('climaxEyebrow')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 font-serif drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)] leading-tight">
              {t('climaxTitle')}
            </h2>
            <p className="text-white/90 text-sm sm:text-base mt-4 max-w-lg mx-auto leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
              {t('climaxDesc')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
              <Link to="/properties" className="btn-accent shadow-lg shadow-champagne/20">
                <span>{t('climaxExploreBtn')}</span>
                <ArrowRightIcon className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white focus:outline-none focus:ring-2 focus:ring-champagne"
              >
                {t('climaxScheduleBtn')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
