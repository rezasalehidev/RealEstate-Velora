import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterPanel from '../components/FilterPanel'
import PropertyGrid from '../components/PropertyGrid'
import { properties, budgetRanges } from '../data/properties'
import { defaultFilters, type FilterState } from '../types'
import { ChevronDownIcon } from '../components/icons'
import { useLanguage } from '../context/LanguageContext'
import { propertyTranslations } from '../i18n/translations'

type SortKey = 'recommended' | 'newest' | 'price-low' | 'price-high'

export default function Properties() {
  const [searchParams] = useSearchParams()
  const { t, language, formatNumber } = useLanguage()
  const [filters, setFilters] = useState<FilterState>({ ...defaultFilters })
  const [sort, setSort] = useState<SortKey>('recommended')
  const [visibleCount, setVisibleCount] = useState(9)
  const [loading, setLoading] = useState(true)

  // Apply URL params on mount
  useEffect(() => {
    const f = { ...defaultFilters }
    const loc = searchParams.get('location')
    const type = searchParams.get('type')
    const budget = searchParams.get('budget')
    if (loc) f.location = loc
    if (type) f.type = type
    if (budget) {
      const range = budgetRanges.find(b => b.label === budget)
      if (range) { f.minPrice = range.min; f.maxPrice = range.max }
    }
    setFilters(f)
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(timer)
  }, [searchParams])

  const filtered = useMemo(() => {
    let result = properties.filter(p => {
      if (filters.search) {
        const q = filters.search.toLowerCase()
        const faData = propertyTranslations[p.id]
        const matchesEn = p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q)
        const matchesFa = faData && (faData.title.toLowerCase().includes(q) || faData.location.toLowerCase().includes(q) || faData.city.toLowerCase().includes(q))
        if (!matchesEn && !matchesFa) return false
      }
      if (filters.location && !p.city.toLowerCase().includes(filters.location.toLowerCase())) return false
      if (filters.status && p.status !== filters.status) return false
      if (filters.type && p.type !== filters.type) return false
      if (p.price < filters.minPrice || p.price > filters.maxPrice) return false
      if (filters.beds && p.beds < filters.beds) return false
      if (filters.baths && p.baths < filters.baths) return false
      if (filters.minArea && p.area < filters.minArea) return false
      if (filters.amenities.length && !filters.amenities.every(a => p.amenities.includes(a))) return false
      return true
    })

    switch (sort) {
      case 'newest': result = [...result].sort((a, b) => b.yearBuilt - a.yearBuilt); break
      case 'price-low': result = [...result].sort((a, b) => a.price - b.price); break
      case 'price-high': result = [...result].sort((a, b) => b.price - a.price); break
    }
    return result
  }, [filters, sort])

  const visible = filtered.slice(0, visibleCount)

  return (
    <div className="py-12 lg:py-16">
      <div className="container-premium">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="eyebrow mb-3">{t('featuredBadge')}</p>
          <h1 className="text-section font-bold text-navy mb-3">
            {t('propertiesPageTitle')}
          </h1>
          <p className="text-navy-300 text-lg max-w-xl mx-auto">
            {t('propertiesPageSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-8">
          <FilterPanel
            filters={filters}
            onChange={setFilters}
            onClear={() => setFilters({ ...defaultFilters })}
            resultCount={filtered.length}
          />

          <div>
            {/* Sort bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <p className="text-sm text-navy-300">
                {language === 'fa' ? (
                  <>
                    نمایش <span className="font-semibold text-navy">{formatNumber(visible.length)}</span> از {formatNumber(filtered.length)} ملک
                  </>
                ) : (
                  <>
                    Showing <span className="font-semibold text-navy">{visible.length}</span> of {filtered.length} properties
                  </>
                )}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value as SortKey)}
                  className="appearance-none bg-white border border-cream-300 rounded-lg ltr:pl-4 ltr:pr-10 rtl:pr-4 rtl:pl-10 py-2.5 text-sm font-medium text-navy focus:outline-none focus:border-champagne cursor-pointer"
                >
                  <option value="recommended">{t('sortFeatured')}</option>
                  <option value="newest">{language === 'fa' ? 'جدیدترین‌ها' : 'Newest'}</option>
                  <option value="price-low">{t('sortPriceLow')}</option>
                  <option value="price-high">{t('sortPriceHigh')}</option>
                </select>
                <ChevronDownIcon className="w-4 h-4 text-navy-300 absolute ltr:right-3 rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <PropertyGrid properties={visible} loading={loading} />

            {!loading && visibleCount < filtered.length && (
              <div className="text-center mt-10">
                <button
                  type="button"
                  onClick={() => setVisibleCount(c => c + 6)}
                  className="btn-outline"
                >
                  {language === 'fa' ? 'بارگذاری املاک بیشتر' : 'Load More Properties'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
