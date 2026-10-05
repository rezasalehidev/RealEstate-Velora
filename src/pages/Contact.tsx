import { useState } from 'react'
import { PhoneIcon, MailIcon, MapPinIcon, ArrowRightIcon, CheckIcon } from '../components/icons'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t, isRTL } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    { icon: <PhoneIcon className="w-5 h-5" />, label: t('yourPhone'), value: '+98 (21) 8877-6655' },
    { icon: <MailIcon className="w-5 h-5" />, label: t('yourEmail'), value: 'concierge@everlight.com' },
    { icon: <MapPinIcon className="w-5 h-5" />, label: t('contactInfoTitle'), value: t('contactAddress') },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container-premium text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-3">{t('contactBadge')}</p>
          <h1 className="text-section font-bold text-navy mb-4">{t('contactHeroTitle')}</h1>
          <p className="text-navy-300 text-lg">
            {t('contactHeroSubtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-premium grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">{t('contactInfoTitle')}</h2>
            <div className="space-y-5 mb-8">
              {contactInfo.map(c => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cream-100 flex items-center justify-center text-champagne-dark shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-navy-300 mb-1">
                      {c.label}
                    </div>
                    <div className="text-navy font-medium" dir="ltr">
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Consultation Hours */}
            <div className="p-6 bg-white rounded-2xl border border-cream-200 shadow-sm mb-6">
              <h3 className="font-bold text-navy mb-2">{t('contactHoursTitle')}</h3>
              <p className="text-sm text-navy-400 leading-relaxed">{t('contactHours')}</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-cream-200 p-8 shadow-card">
            <h2 className="text-2xl font-bold text-navy mb-6">{t('contactFormTitle')}</h2>
            {submitted && (
              <div className="bg-champagne/10 text-champagne-dark text-sm rounded-lg p-3 mb-5 flex items-center gap-2">
                <CheckIcon className="w-4 h-4 shrink-0" />
                <span>{t('contactSuccess')}</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label-field">{t('yourName')}</label>
                <input
                  className="input-field"
                  placeholder={t('yourName')}
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="label-field">{t('yourEmail')}</label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="name@example.com"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="label-field">{t('contactSubject')}</label>
                <input
                  className="input-field"
                  placeholder={t('contactSubjectPlaceholder')}
                  required
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                />
              </div>
              <div>
                <label className="label-field">{t('yourMessage')}</label>
                <textarea
                  className="input-field min-h-[140px] resize-none"
                  placeholder={t('yourMessage')}
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" className="w-full btn-primary justify-center">
                <span>{t('contactSubmitBtn')}</span>
                <ArrowRightIcon className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
