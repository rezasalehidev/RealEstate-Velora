import FeatureItem from '../components/FeatureItem'
import { BadgeIcon, ShieldIcon, HeadsetIcon, HeartIcon } from '../components/icons'
import { useLanguage } from '../context/LanguageContext'

export default function TrustFeatures() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <BadgeIcon className="w-7 h-7" />,
      title: t('trustVerifiedTitle'),
      description: t('trustVerifiedDesc'),
    },
    {
      icon: <ShieldIcon className="w-7 h-7" />,
      title: t('trustSecureTitle'),
      description: t('trustSecureDesc'),
    },
    {
      icon: <HeadsetIcon className="w-7 h-7" />,
      title: t('trustSupportTitle'),
      description: t('trustSupportDesc'),
    },
    {
      icon: <HeartIcon className="w-7 h-7" />,
      title: t('trustLivingTitle'),
      description: t('trustLivingDesc'),
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white border-y border-cream-200">
      <div className="container-premium">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {features.map(f => (
            <FeatureItem key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
