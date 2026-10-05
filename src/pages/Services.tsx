import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { HomeIcon, ArrowRightIcon, ShieldIcon, SparkleIcon, BadgeIcon, HeadsetIcon } from '../components/icons'
import { useLanguage } from '../context/LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <HomeIcon className="w-7 h-7" />,
      title: t('service1Title'),
      description: t('service1Desc'),
    },
    {
      icon: <ArrowRightIcon className="w-7 h-7" />,
      title: t('service2Title'),
      description: t('service2Desc'),
    },
    {
      icon: <ShieldIcon className="w-7 h-7" />,
      title: t('service3Title'),
      description: t('service3Desc'),
    },
    {
      icon: <SparkleIcon className="w-7 h-7" />,
      title: t('service4Title'),
      description: t('service4Desc'),
    },
    {
      icon: <BadgeIcon className="w-7 h-7" />,
      title: t('service5Title'),
      description: t('service5Desc'),
    },
    {
      icon: <HeadsetIcon className="w-7 h-7" />,
      title: t('service6Title'),
      description: t('service6Desc'),
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container-premium text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-3">{t('servicesBadge')}</p>
          <h1 className="text-section font-bold text-navy mb-4">{t('servicesHeroTitle')}</h1>
          <p className="text-navy-300 text-lg">
            {t('servicesHeroSubtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="container-premium">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
