import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { properties } from '../data/properties'
import PropertyGrid from '../components/PropertyGrid'
import { HeartIcon, ArrowRightIcon } from '../components/icons'
import { useLanguage } from '../context/LanguageContext'

export default function Favorites() {
  const { favorites } = useFavorites()
  const { t, formatNumber, isRTL, language } = useLanguage()
  const favProperties = properties.filter(p => favorites.includes(p.id))

  return (
    <div className="py-12 lg:py-16">
      <div className="container-premium">
        <div className="text-center mb-10">
          <p className="eyebrow mb-3">{t('favoritesTitle')}</p>
          <h1 className="text-section font-bold text-navy mb-3">{t('navFavorites')}</h1>
          <p className="text-navy-300">
            {favProperties.length > 0
              ? (language === 'fa'
                  ? `شما ${formatNumber(favProperties.length)} ملک نشان‌شده در فهرست خود دارید.`
                  : `You have ${favProperties.length} saved ${favProperties.length === 1 ? 'property' : 'properties'}.`)
              : t('favoritesEmptyDesc')}
          </p>
        </div>

        {favProperties.length > 0 ? (
          <PropertyGrid properties={favProperties} />
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-cream-200 shadow-sm max-w-2xl mx-auto p-8">
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-cream-100 flex items-center justify-center text-champagne">
              <HeartIcon className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">{t('favoritesEmptyTitle')}</h3>
            <p className="text-navy-300 mb-6 max-w-md mx-auto">
              {t('favoritesEmptyDesc')}
            </p>
            <Link to="/properties" className="btn-primary">
              <span>{t('favoritesExploreBtn')}</span>
              <ArrowRightIcon className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
