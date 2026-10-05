import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import PropertyGallery from '../components/PropertyGallery'
import FavoriteButton from '../components/FavoriteButton'
import { properties } from '../data/properties'
import {
  BedIcon,
  BathIcon,
  AreaIcon,
  MapPinIcon,
  CarIcon,
  CalendarIcon,
  CheckIcon,
  PhoneIcon,
  MailIcon,
  ArrowRightIcon,
  StarIcon,
} from '../components/icons'
import { useLanguage } from '../context/LanguageContext'
import { getLocalizedAmenity } from '../i18n/translations'

export default function PropertyDetails() {
  const { id } = useParams()
  const property = properties.find(p => p.id === id)
  const { t, language, formatNumber, formatPrice, getLocalizedProperty, isRTL } = useLanguage()

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  if (!property) {
    return (
      <div className="container-premium py-20 text-center">
        <h1 className="text-2xl font-bold text-navy mb-4">{t('notFoundTitle')}</h1>
        <Link to="/properties" className="btn-primary">
          <span>{t('backToProperties')}</span>
          <ArrowRightIcon className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
        </Link>
      </div>
    )
  }

  const loc = getLocalizedProperty(property)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="py-8 lg:py-12">
      <div className="container-premium">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-navy-300 mb-6">
          <Link to="/" className="hover:text-navy transition-colors">{t('navHome')}</Link>
          <span className="text-navy-200">/</span>
          <Link to="/properties" className="hover:text-navy transition-colors">{t('navProperties')}</Link>
          <span className="text-navy-200">/</span>
          <span className="text-navy font-medium truncate max-w-[200px] sm:max-w-none">{loc.title}</span>
        </nav>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Main content */}
          <div>
            <PropertyGallery images={property.gallery} title={loc.title} />

            {/* Title & price */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mt-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      property.status === 'For Sale' ? 'bg-navy text-white' : 'bg-champagne text-navy'
                    }`}
                  >
                    {loc.status}
                  </span>
                  <span className="text-sm font-medium text-navy-300">{loc.type}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-navy">{loc.title}</h1>
                <div className="flex items-center gap-1.5 text-navy-300 mt-2">
                  <MapPinIcon className="w-4 h-4 flex-shrink-0 text-champagne" />
                  <span>{loc.location}</span>
                </div>
              </div>
              <div className="ltr:sm:text-right rtl:sm:text-left flex flex-row sm:flex-col items-center sm:items-end justify-between gap-3">
                <div className="text-2xl sm:text-3xl font-bold text-navy font-mono">
                  {formatPrice(property.price)}
                </div>
                <FavoriteButton id={property.id} size="lg" variant="dark" />
              </div>
            </div>

            {/* Key specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 p-6 bg-white rounded-2xl border border-cream-200 shadow-sm">
              {[
                { icon: <BedIcon className="w-5 h-5" />, label: t('beds'), value: formatNumber(property.beds) },
                { icon: <BathIcon className="w-5 h-5" />, label: t('baths'), value: formatNumber(property.baths) },
                { icon: <AreaIcon className="w-5 h-5" />, label: t('sqft'), value: `${formatNumber(property.area.toLocaleString())}` },
                { icon: <CarIcon className="w-5 h-5" />, label: t('parking'), value: formatNumber(property.parking) },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-cream-100 flex items-center justify-center text-champagne-dark mx-auto mb-2">
                    {s.icon}
                  </div>
                  <div className="font-bold text-navy text-base">{s.value}</div>
                  <div className="text-xs text-navy-300">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy mb-3">{t('propertyDescription')}</h2>
              <p className="text-navy-400 leading-relaxed text-base">{loc.description}</p>
            </div>

            {/* Amenities */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy mb-4">{t('propertyAmenities')}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map(a => (
                  <div key={a} className="flex items-center gap-2 text-sm text-navy-400 bg-white p-3 rounded-xl border border-cream-200">
                    <span className="w-5 h-5 rounded-full bg-champagne/20 flex items-center justify-center text-champagne-dark flex-shrink-0">
                      <CheckIcon className="w-3 h-3" />
                    </span>
                    <span>{getLocalizedAmenity(a, language)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-navy mb-4">{t('propertyFeatures')}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {loc.features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-navy-400 bg-cream-50 p-3 rounded-xl border border-cream-200">
                    <span className="w-5 h-5 rounded-full bg-navy/10 flex items-center justify-center text-navy flex-shrink-0">
                      <CheckIcon className="w-3 h-3" />
                    </span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Agent & Contact */}
          <div>
            <div className="sticky top-24 space-y-4">
              {/* Agent card */}
              <div className="bg-white rounded-2xl border border-cream-200 p-6 shadow-card">
                <h3 className="font-bold text-navy mb-4">
                  {language === 'fa' ? 'اطلاعات مشاور و کارگزار' : 'Listed by'}
                </h3>
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={property.agent.image.startsWith('http') || property.agent.image.startsWith('/') ? property.agent.image : `https://images.unsplash.com/${property.agent.image}?auto=format&fit=crop&w=400&q=80`}
                    alt={property.agent.name}
                    onError={(e) => {
                      const target = e.currentTarget
                      target.onerror = null
                      target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
                    }}
                    className="w-16 h-16 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <div className="font-bold text-navy">{property.agent.name}</div>
                    <div className="text-sm text-navy-300">{t('agentAdvisor')}</div>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <StarIcon key={i} className="w-3.5 h-3.5 text-champagne" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mb-5">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center gap-2.5 text-sm text-navy-400 hover:text-navy transition-colors"
                  >
                    <PhoneIcon className="w-4 h-4 text-champagne shrink-0" />
                    <span dir="ltr">{property.agent.phone}</span>
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center gap-2.5 text-sm text-navy-400 hover:text-navy transition-colors"
                  >
                    <MailIcon className="w-4 h-4 text-champagne shrink-0" />
                    <span>{property.agent.email}</span>
                  </a>
                </div>
                <button type="button" className="w-full btn-primary mb-2 justify-center">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{t('climaxScheduleBtn')}</span>
                </button>
              </div>

              {/* Contact form */}
              <div className="bg-white rounded-2xl border border-cream-200 p-6 shadow-card">
                <h3 className="font-bold text-navy mb-4">{t('contactAgentTitle')}</h3>
                {submitted && (
                  <div className="bg-champagne/10 text-champagne-dark text-sm rounded-lg p-3 mb-4 flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 shrink-0" />
                    <span>{t('inquirySuccessMsg')}</span>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    className="input-field"
                    placeholder={t('yourName')}
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    type="email"
                    className="input-field"
                    placeholder={t('yourEmail')}
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                  <input
                    className="input-field"
                    placeholder={t('yourPhone')}
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                  <textarea
                    className="input-field min-h-[100px] resize-none"
                    placeholder={t('defaultInquiryMessage', { title: loc.title })}
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                  <button type="submit" className="w-full btn-accent justify-center">
                    <span>{t('sendInquiryBtn')}</span>
                    <ArrowRightIcon className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
