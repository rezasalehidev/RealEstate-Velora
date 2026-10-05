import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'
import { useLanguage } from '../context/LanguageContext'

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'

function normalizeImageUrl(src: string): string {
  if (!src) return FALLBACK_IMAGE
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/')) {
    return src
  }
  return `https://images.unsplash.com/${src}?auto=format&fit=crop&w=1200&q=80`
}

export default function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0)
  const { isRTL, t, formatNumber } = useLanguage()

  const safeImages = images && images.length > 0 ? images.map(normalizeImageUrl) : [FALLBACK_IMAGE]

  const next = () => setActive(p => (p + 1) % safeImages.length)
  const prev = () => setActive(p => (p - 1 + safeImages.length) % safeImages.length)

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget
    target.onerror = null
    target.src = FALLBACK_IMAGE
  }

  return (
    <div className="space-y-3">
      <div className="relative rounded-2xl overflow-hidden h-80 sm:h-96 lg:h-[480px] group bg-cream-100">
        <img
          src={safeImages[active]}
          alt={title}
          onError={handleImgError}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={isRTL ? next : prev}
              className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-navy hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label={t('prevImage')}
            >
              <ChevronLeftIcon className={`w-5 h-5 ${isRTL ? 'rtl-flip' : ''}`} />
            </button>
            <button
              type="button"
              onClick={isRTL ? prev : next}
              className="absolute ltr:right-4 rtl:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-navy hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label={t('nextImage')}
            >
              <ChevronRightIcon className={`w-5 h-5 ${isRTL ? 'rtl-flip' : ''}`} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {safeImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                  }`}
                  aria-label={`${t('prevImage')} ${formatNumber(i + 1)}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {safeImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {safeImages.map((imgSrc, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-xl overflow-hidden h-20 transition-all bg-cream-100 ${
                i === active ? 'ring-2 ring-champagne' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={imgSrc}
                alt={`${title} ${formatNumber(i + 1)}`}
                onError={handleImgError}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
