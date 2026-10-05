import { Link } from 'react-router-dom'
import { HomeIcon, FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, PhoneIcon, MailIcon, MapPinIcon } from './icons'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t, language } = useLanguage()

  const quickLinks = [
    { label: t('navHome'), path: '/' },
    { label: t('navProperties'), path: '/properties' },
    { label: t('navAbout'), path: '/about' },
    { label: t('navServices'), path: '/services' },
    { label: t('navContact'), path: '/contact' },
    { label: t('navFavorites'), path: '/favorites' },
  ]

  return (
    <footer className="bg-navy text-white">
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-champagne flex items-center justify-center shrink-0">
                <HomeIcon className="w-5 h-5 text-navy" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg tracking-tight">{t('brandName')}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne-light">
                  {t('brandTagline')}
                </span>
              </div>
            </Link>
            <p className="text-sm text-navy-200 leading-relaxed max-w-xs">
              {t('footerBio')}
            </p>
            <div className="flex gap-3 mt-5">
              {[FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-navy-600 flex items-center justify-center text-navy-200 hover:bg-champagne hover:text-navy transition-all duration-300"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-champagne-light mb-5">
              {t('footerQuickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-navy-200 hover:text-champagne-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-champagne-light mb-5">
              {t('footerContactInfo')}
            </h4>
            <ul className="space-y-3 text-sm text-navy-200">
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="w-4 h-4 mt-0.5 text-champagne shrink-0" />
                <span dir="ltr">+98 (21) 8877-6655 / +1 (310) 555-0192</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon className="w-4 h-4 mt-0.5 text-champagne shrink-0" />
                <span>concierge@everlight.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 mt-0.5 text-champagne shrink-0" />
                <span>{t('contactAddress')}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-champagne-light mb-5">
              {t('footerNewsletterTitle')}
            </h4>
            <p className="text-sm text-navy-200 mb-4">
              {t('footerNewsletterDesc')}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder={t('footerEmailPlaceholder')}
                className="flex-1 min-w-0 bg-navy-600 border border-navy-500 rounded-lg px-4 py-2.5 text-sm text-white placeholder-navy-300 focus:outline-none focus:border-champagne"
              />
              <button
                type="submit"
                className="bg-champagne text-navy px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-champagne-dark transition-colors shrink-0"
              >
                {t('footerSubscribeBtn')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-600">
        <div className="container-premium py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-navy-300">
            {language === 'fa'
              ? '© ۲۰۲۶ تمامی حقوق برای شرکت املاک اورلایت محفوظ است.'
              : '© 2026 Everlight Homes. All rights reserved.'}
          </p>
          <div className="flex gap-5 text-xs text-navy-300">
            <a href="#" className="hover:text-champagne-light transition-colors">
              {language === 'fa' ? 'حریم خصوصی' : 'Privacy Policy'}
            </a>
            <a href="#" className="hover:text-champagne-light transition-colors">
              {language === 'fa' ? 'شرایط و ضوابط' : 'Terms & Conditions'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
