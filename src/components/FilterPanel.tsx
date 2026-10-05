import { useState } from 'react'
import { locations, propertyTypes, allAmenities } from '../data/properties'
import { SlidersIcon, CloseIcon, ChevronDownIcon } from './icons'
import { useLanguage } from '../context/LanguageContext'
import { getLocalizedLocation, getLocalizedType, getLocalizedAmenity } from '../i18n/translations'
import type { FilterState } from '../types'

interface Props {
  filters: FilterState
  onChange: (filters: FilterState) => void
  onClear: () => void
  resultCount: number
}

export default function FilterPanel({ filters, onChange, onClear, resultCount }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, language, formatNumber, formatPrice } = useLanguage()

  const update = (key: keyof FilterState, value: any) => onChange({ ...filters, [key]: value })

  const toggleAmenity = (a: string) => {
    const list = filters.amenities.includes(a)
      ? filters.amenities.filter(x => x !== a)
      : [...filters.amenities, a]
    update('amenities', list)
  }

  const content = (
    <div className="space-y-5">
      {/* Search */}
      <div>
        <label className="label-field">{t('searchKeywordPlaceholder')}</label>
        <input
          type="text"
          value={filters.search}
          onChange={e => update('search', e.target.value)}
          placeholder={t('searchKeywordPlaceholder')}
          className="input-field"
        />
      </div>

      {/* Location */}
      <div>
        <label className="label-field">{t('searchLocationLabel')}</label>
        <SelectInput
          value={filters.location}
          onChange={v => update('location', v)}
          options={locations}
          formatOption={l => getLocalizedLocation(l, language)}
          allLabel={language === 'fa' ? 'همه موقعیت‌ها' : 'All Locations'}
        />
      </div>

      {/* Buy / Rent */}
      <div>
        <label className="label-field">{t('filterAllStatuses')}</label>
        <div className="flex gap-2">
          {[
            { value: '', label: language === 'fa' ? 'همه' : 'All' },
            { value: 'For Sale', label: t('forSale') },
            { value: 'For Rent', label: t('forRent') },
          ].map(s => (
            <button
              key={s.value}
              type="button"
              onClick={() => update('status', s.value)}
              className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                filters.status === s.value
                  ? 'bg-navy text-white shadow-sm'
                  : 'bg-cream-50 text-navy-400 hover:bg-cream-100'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <label className="label-field">{t('searchTypeLabel')}</label>
        <SelectInput
          value={filters.type}
          onChange={v => update('type', v)}
          options={propertyTypes}
          formatOption={pt => getLocalizedType(pt, language)}
          allLabel={language === 'fa' ? 'همه انواع' : 'All Types'}
        />
      </div>

      {/* Price Range */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="label-field mb-0">{t('filterPriceMax')}</label>
          <span className="text-xs font-bold text-champagne-dark font-mono">
            {formatPrice(filters.maxPrice)}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100000000}
          step={5000000}
          value={filters.maxPrice}
          onChange={e => update('maxPrice', Number(e.target.value))}
          className="w-full accent-champagne cursor-pointer"
        />
      </div>

      {/* Beds & Baths */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="label-field">{t('filterBedrooms')}</label>
          <SelectInput
            value={String(filters.beds)}
            onChange={v => update('beds', Number(v))}
            options={['0', '1', '2', '3', '4', '5', '6']}
            formatOption={v => v === '0' ? (language === 'fa' ? 'هر تعداد' : 'Any') : `${formatNumber(v)}+`}
            allLabel=""
          />
        </div>
        <div>
          <label className="label-field">{t('filterBathrooms')}</label>
          <SelectInput
            value={String(filters.baths)}
            onChange={v => update('baths', Number(v))}
            options={['0', '1', '2', '3', '4', '5', '6']}
            formatOption={v => v === '0' ? (language === 'fa' ? 'هر تعداد' : 'Any') : `${formatNumber(v)}+`}
            allLabel=""
          />
        </div>
      </div>

      {/* Min Area */}
      <div>
        <label className="label-field">{t('sqft')}</label>
        <input
          type="number"
          value={filters.minArea || ''}
          onChange={e => update('minArea', Number(e.target.value))}
          placeholder={language === 'fa' ? 'حداقل متراژ...' : 'Min sq ft...'}
          className="input-field"
        />
      </div>

      {/* Amenities */}
      <div>
        <label className="label-field">{t('filterAmenities')}</label>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {allAmenities.map(a => (
            <button
              key={a}
              type="button"
              onClick={() => toggleAmenity(a)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filters.amenities.includes(a)
                  ? 'bg-champagne text-navy shadow-sm'
                  : 'bg-cream-50 text-navy-400 hover:bg-cream-100'
              }`}
            >
              {getLocalizedAmenity(a, language)}
            </button>
          ))}
        </div>
      </div>

      <button type="button" onClick={onClear} className="w-full btn-outline">
        {t('filterClear')}
      </button>
    </div>
  )

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:block sticky top-24 bg-white rounded-2xl shadow-card border border-cream-200 p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-navy flex items-center gap-2">
            <SlidersIcon className="w-5 h-5 text-champagne" />
            <span>{t('filterTitle')}</span>
          </h3>
          <span className="text-xs text-navy-300">
            {t('resultsCount', { count: resultCount })}
          </span>
        </div>
        {content}
      </aside>

      {/* Mobile */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="btn-outline w-full justify-center"
        >
          <SlidersIcon className="w-4 h-4" />
          <span>{t('filterTitle')} ({formatNumber(resultCount)})</span>
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative ltr:ml-auto rtl:mr-auto w-full max-w-sm bg-cream h-full overflow-y-auto p-6 animate-fade-in z-10">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-navy flex items-center gap-2">
                <SlidersIcon className="w-5 h-5 text-champagne" />
                <span>{t('filterTitle')}</span>
              </h3>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-cream-100"
                aria-label="Close"
              >
                <CloseIcon className="w-5 h-5 text-navy" />
              </button>
            </div>
            {content}
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="w-full btn-primary mt-4 justify-center"
            >
              {t('resultsCount', { count: resultCount })}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function SelectInput({
  value,
  onChange,
  options,
  formatOption,
  allLabel,
}: {
  value: string
  onChange: (v: string) => void
  options: string[]
  formatOption?: (o: string) => string
  allLabel?: string
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="input-field appearance-none ltr:pr-9 rtl:pl-9 cursor-pointer"
      >
        {allLabel !== undefined && allLabel !== '' && (
          <option value="">{allLabel}</option>
        )}
        {options.map(o => (
          <option key={o} value={o === 'All Locations' || o === 'All Types' ? '' : o}>
            {formatOption ? formatOption(o) : o}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="w-4 h-4 text-navy-300 absolute ltr:right-3 rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  )
}
