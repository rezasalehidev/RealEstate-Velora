import type { ReactNode } from 'react'
import { ArrowRightIcon } from './icons'
import { useLanguage } from '../context/LanguageContext'

interface Props {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: Props) {
  const { t } = useLanguage()

  return (
    <div className="card-premium group p-7 flex flex-col">
      <div className="w-14 h-14 rounded-2xl bg-cream-100 flex items-center justify-center text-champagne-dark mb-5 transition-all duration-300 group-hover:bg-champagne group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-navy-300 leading-relaxed mb-5 flex-1">{description}</p>
      <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-champagne-dark hover:text-navy transition-colors self-start">
        {t('serviceLearnMore')} <ArrowRightIcon className="w-4 h-4 rtl-flip" />
      </button>
    </div>
  )
}
