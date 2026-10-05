import StatItem from '../components/StatItem'
import { ArrowRightIcon } from '../components/icons'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function WhyChooseUs() {
  const { t, isRTL, language, formatNumber } = useLanguage()

  const stats = [
    { value: language === 'fa' ? '۱۲K+' : '12K+', label: t('statHappyClients') },
    { value: language === 'fa' ? '۵۰۰+' : '500+', label: t('statPropertiesSold') },
    { value: language === 'fa' ? '۲۵+' : '25+', label: language === 'fa' ? 'شهر فعال' : 'Active Cities' },
    { value: language === 'fa' ? '۹۸%' : '98%', label: language === 'fa' ? 'رضایت مشتریان' : 'Success Rate' },
  ]

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with overlay text */}
          <div className="relative rounded-3xl overflow-hidden h-80 sm:h-96 lg:h-[560px]">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury architectural living room"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            <div className="absolute bottom-8 ltr:left-8 rtl:right-8">
              <p className={`text-4xl sm:text-5xl lg:text-6xl text-white leading-tight ${
                language === 'fa' ? 'font-bold font-persian' : 'font-script'
              }`}>
                {language === 'fa' ? (
                  <>فراتر از<br />تنها یک خانه</>
                ) : (
                  <>More<br />Than Just<br />a Home</>
                )}
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="eyebrow mb-4">{t('whyEyebrow')}</p>
            <h2 className="text-section font-bold text-navy mb-4">
              {t('whyTitle')}
            </h2>
            <p className="text-navy-300 text-lg leading-relaxed mb-8">
              {t('whySubtitle')}
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map(s => (
                <StatItem key={s.label} {...s} />
              ))}
            </div>
            <Link to="/about" className="btn-accent">
              <span>{t('navAbout')}</span>
              <ArrowRightIcon className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
