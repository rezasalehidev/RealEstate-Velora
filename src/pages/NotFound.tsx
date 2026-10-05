import { Link } from 'react-router-dom'
import { HomeIcon, ArrowRightIcon } from '../components/icons'
import { useLanguage } from '../context/LanguageContext'

export default function NotFound() {
  const { t, isRTL } = useLanguage()

  return (
    <div className="container-premium py-24 text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cream-100 flex items-center justify-center text-champagne">
        <HomeIcon className="w-10 h-10" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-3">{t('notFoundTitle')}</h1>
      <p className="text-navy-300 mb-8 max-w-md mx-auto">{t('notFoundDesc')}</p>
      <Link to="/" className="btn-primary">
        <span>{t('backHomeBtn')}</span>
        <ArrowRightIcon className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
      </Link>
    </div>
  )
}
