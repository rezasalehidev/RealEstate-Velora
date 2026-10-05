import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { useLanguage } from '../context/LanguageContext'
import { HeartIcon, HeartFilledIcon, BedIcon, BathIcon, AreaIcon, MapPinIcon, ArrowRightIcon } from './icons'
import type { Property } from '../types'

export default function PropertyCard({ property }: { property: Property }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const { t, formatNumber, formatPrice, getLocalizedProperty, isRTL } = useLanguage()
  const fav = isFavorite(property.id)
  const loc = getLocalizedProperty(property)

  return (
    <Link to={`/property/${property.id}`} className="card-premium group flex flex-col">
      <div className="relative overflow-hidden h-56">
        <img
          src={property.image.startsWith('http') || property.image.startsWith('/') ? property.image : `https://images.unsplash.com/${property.image}?auto=format&fit=crop&w=1200&q=80`}
          alt={loc.title}
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget
            target.onerror = null
            target.src = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
          }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span
          className={`absolute top-4 ltr:left-4 rtl:right-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
            property.status === 'For Sale' ? 'bg-navy text-white' : 'bg-champagne text-navy'
          }`}
        >
          {loc.status}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            toggleFavorite(property.id)
          }}
          aria-label={fav ? t('removedFromFavorites') : t('savedToFavorites')}
          className={`absolute top-4 ltr:right-4 rtl:left-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            fav
              ? 'bg-white text-champagne-dark animate-heart-pop shadow-md'
              : 'bg-white/90 text-navy-300 hover:text-champagne-dark'
          }`}
        >
          {fav ? <HeartFilledIcon className="w-5 h-5" /> : <HeartIcon className="w-5 h-5" />}
        </button>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-champagne-dark transition-colors line-clamp-1">
          {loc.title}
        </h3>
        <div className="flex items-center gap-1.5 text-sm text-navy-300 mb-4">
          <MapPinIcon className="w-4 h-4 flex-shrink-0" />
          <span>{loc.location}</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-navy-400 mb-5 pb-5 border-b border-cream-200">
          <span className="flex items-center gap-1.5">
            <BedIcon className="w-4 h-4 text-champagne" /> {formatNumber(property.beds)} {t('beds')}
          </span>
          <span className="flex items-center gap-1.5">
            <BathIcon className="w-4 h-4 text-champagne" /> {formatNumber(property.baths)} {t('baths')}
          </span>
          <span className="flex items-center gap-1.5">
            <AreaIcon className="w-4 h-4 text-champagne" /> {formatNumber(property.area.toLocaleString())} {t('sqft')}
          </span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg sm:text-xl font-bold text-navy font-mono">
            {formatPrice(property.price)}
          </span>
          <span className="w-9 h-9 rounded-full bg-cream-100 flex items-center justify-center text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white">
            <ArrowRightIcon className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
          </span>
        </div>
      </div>
    </Link>
  )
}
