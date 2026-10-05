import { Link } from 'react-router-dom'
import PropertyGrid from '../components/PropertyGrid'
import SectionHeader from '../components/SectionHeader'
import { ArrowRightIcon } from '../components/icons'
import { properties } from '../data/properties'
import { useLanguage } from '../context/LanguageContext'

export default function FeaturedProperties() {
  const { t, isRTL } = useLanguage()
  const featured = properties.filter(p => p.featured)

  return (
    <section className="py-16 lg:py-24">
      <div className="container-premium">
        <SectionHeader
          eyebrow={t('featuredBadge')}
          title={t('featuredTitle')}
          action={
            <Link
              to="/properties"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-champagne-dark hover:text-navy transition-colors"
            >
              <span>{t('viewAllProperties')}</span>
              <ArrowRightIcon className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
            </Link>
          }
        />
        <PropertyGrid properties={featured} />
      </div>
    </section>
  )
}
