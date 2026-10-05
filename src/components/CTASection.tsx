import { Link } from 'react-router-dom'
import { ArrowRightIcon } from './icons'
import { useLanguage } from '../context/LanguageContext'

export default function CTASection() {
  const { t, isRTL } = useLanguage()

  return (
    <section className="py-16 lg:py-24">
      <div className="container-premium">
        <div className="relative rounded-3xl overflow-hidden bg-navy">
          {/* Background image */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-navy via-navy/95 to-navy/40 lg:to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury residence"
              className="w-full h-full object-cover opacity-30 lg:opacity-60"
            />
          </div>
          <div className="relative z-20 grid lg:grid-cols-2 items-center gap-8 p-8 sm:p-12 lg:p-16">
            <div>
              <p className="eyebrow mb-4">{t('ctaBadge')}</p>
              <h2 className="text-section font-bold text-white mb-4">
                {t('ctaTitle')}
              </h2>
              <p className="text-navy-200 text-lg mb-8 max-w-md">
                {t('ctaSubtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/properties" className="btn-accent">
                  <span>{t('ctaBrowseBtn')}</span>
                  <ArrowRightIcon className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white"
                >
                  {t('ctaContactBtn')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
