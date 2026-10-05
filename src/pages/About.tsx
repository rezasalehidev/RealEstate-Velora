import CTASection from '../components/CTASection'
import StatItem from '../components/StatItem'
import { ShieldIcon, BadgeIcon, HeadsetIcon, HeartIcon, SparkleIcon } from '../components/icons'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t, language } = useLanguage()

  const stats = [
    { value: language === 'fa' ? '۱۲K+' : '12K+', label: t('statHappyClients') },
    { value: language === 'fa' ? '۵۰۰+' : '500+', label: t('statPropertiesSold') },
    { value: language === 'fa' ? '۲۵+' : '25+', label: language === 'fa' ? 'شهر فعال' : 'Active Cities' },
    { value: language === 'fa' ? '۹۸%' : '98%', label: language === 'fa' ? 'رضایت مشتریان' : 'Success Rate' },
  ]

  const values = [
    {
      icon: <ShieldIcon className="w-6 h-6" />,
      title: t('aboutValue1Title'),
      description: t('aboutValue1Desc'),
    },
    {
      icon: <BadgeIcon className="w-6 h-6" />,
      title: t('aboutValue2Title'),
      description: t('aboutValue2Desc'),
    },
    {
      icon: <HeadsetIcon className="w-6 h-6" />,
      title: t('aboutValue3Title'),
      description: t('aboutValue3Desc'),
    },
    {
      icon: <HeartIcon className="w-6 h-6" />,
      title: language === 'fa' ? 'تعهد و شور حرفه‌ای' : 'Passion',
      description: language === 'fa' ? 'ما به کارمان عشق می‌ورزیم و بازتاب این اشتیاق در رضایت پایدار همراهانمان مشهود است.' : 'We love what we do, and it shows in our results.',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 lg:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-5">
            <p className="eyebrow text-champagne-light mb-3">{t('aboutBadge')}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">
              {t('aboutHeroTitle')}
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="container-premium grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">{t('aboutBadge')}</p>
            <h2 className="text-section font-bold text-navy mb-5">
              {t('aboutStoryTitle')}
            </h2>
            <p className="text-navy-300 leading-relaxed mb-4 text-base sm:text-lg">
              {t('aboutStoryP1')}
            </p>
            <p className="text-navy-300 leading-relaxed mb-4 text-base sm:text-lg">
              {t('aboutStoryP2')}
            </p>
            <p className="text-navy-300 leading-relaxed text-base sm:text-lg">
              {t('aboutHeroSubtitle')}
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden h-80 lg:h-[480px] shadow-premium">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
              alt="Modern villa architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="container-premium text-center max-w-3xl mx-auto px-6">
          <SparkleIcon className="w-10 h-10 text-champagne mx-auto mb-5" />
          <p className="eyebrow text-champagne-light mb-4">
            {language === 'fa' ? 'رسالت اورلایت' : 'OUR MISSION'}
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed font-serif">
            {language === 'fa'
              ? '«توانمندسازی هر فرد برای یافتن مکانی که به آن تعلق خاطر دارد — با تبدیل فرآیند جستجو و انتخاب ملک به تجربه‌ای شفاف، آسان و اصیل.»'
              : '"To empower every person to find a place they truly belong — by making property discovery transparent, effortless, and deeply personal."'}
          </h2>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container-premium">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">
              {language === 'fa' ? 'باورهای اصیل ما' : 'WHAT WE STAND FOR'}
            </p>
            <h2 className="text-section font-bold text-navy">
              {t('aboutValuesTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(v => (
              <div key={v.title} className="text-center p-6 bg-white rounded-2xl border border-cream-200 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-cream-100 flex items-center justify-center text-champagne-dark mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="font-bold text-navy mb-2 text-lg">{v.title}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container-premium">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <StatItem {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
