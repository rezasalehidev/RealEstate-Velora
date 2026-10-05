import PropertyCard from './PropertyCard'
import type { Property } from '../types'
import { useLanguage } from '../context/LanguageContext'

export default function PropertyGrid({ properties, loading }: { properties: Property[]; loading?: boolean }) {
  const { t, language } = useLanguage()

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card-premium animate-pulse">
            <div className="h-56 bg-cream-200" />
            <div className="p-5 space-y-3">
              <div className="h-5 bg-cream-200 rounded w-3/4" />
              <div className="h-4 bg-cream-200 rounded w-1/2" />
              <div className="h-4 bg-cream-200 rounded w-2/3" />
              <div className="h-6 bg-cream-200 rounded w-1/3 mt-4" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl border border-cream-200 p-8 shadow-sm">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cream-200 flex items-center justify-center text-champagne-dark">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">{t('noPropertiesFound')}</h3>
        <p className="text-navy-300">
          {language === 'fa'
            ? 'فیلترهای انتخابی خود را تغییر دهید تا نتایج بیشتری مشاهده فرمایید.'
            : 'Try adjusting your filters to see more results.'}
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map(p => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  )
}
