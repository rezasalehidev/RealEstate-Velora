import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import { useLanguage } from '../context/LanguageContext'
import { HomeIcon, HeartIcon, UserIcon, ArrowRightIcon, MenuIcon, CloseIcon } from './icons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { favorites } = useFavorites()
  const { language, setLanguage, t, isRTL } = useLanguage()
  const location = useLocation()

  const navLinks = [
    { label: t('navHome'), path: '/' },
    { label: t('navProperties'), path: '/properties' },
    { label: t('navAbout'), path: '/about' },
    { label: t('navServices'), path: '/services' },
    { label: t('navContact'), path: '/contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-cream/80 backdrop-blur-sm'}`}>
      <div className="container-premium">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center group-hover:bg-navy-600 transition-colors shrink-0">
              <HomeIcon className="w-5 h-5 text-champagne" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-navy text-lg tracking-tight">{t('brandName')}</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne-dark">{t('brandTagline')}</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-navy bg-cream-100' : 'text-navy-400 hover:text-navy hover:bg-cream-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Pill */}
            <div className="flex items-center bg-cream-200/80 border border-cream-300 rounded-lg p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-navy text-white shadow-sm font-bold'
                    : 'text-navy-400 hover:text-navy'
                }`}
                aria-label="English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('fa')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  language === 'fa'
                    ? 'bg-navy text-white shadow-sm font-bold font-persian'
                    : 'text-navy-400 hover:text-navy font-persian'
                }`}
                aria-label="فارسی"
              >
                فا
              </button>
            </div>

            <Link
              to="/favorites"
              className="relative w-10 h-10 rounded-lg flex items-center justify-center text-navy-400 hover:text-champagne-dark hover:bg-cream-100 transition-colors"
              aria-label={t('navFavorites')}
            >
              <HeartIcon className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-champagne text-navy text-[10px] font-bold rounded-full flex items-center justify-center">
                  {language === 'fa' ? favorites.length.toLocaleString('fa-IR') : favorites.length}
                </span>
              )}
            </Link>

            <button
              className="hidden sm:flex w-10 h-10 rounded-lg items-center justify-center text-navy-400 hover:text-champagne-dark hover:bg-cream-100 transition-colors"
              aria-label="Profile"
            >
              <UserIcon className="w-5 h-5" />
            </button>

            <Link to="/properties" className="hidden sm:inline-flex btn-primary">
              <span>{t('navGetStarted')}</span>
              <ArrowRightIcon className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-navy hover:bg-cream-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-cream-200 bg-white animate-fade-in">
          <nav className="container-premium py-4 flex flex-col gap-1">
            {/* Language toggle inside mobile menu */}
            <div className="flex items-center justify-between px-4 py-2 mb-2 bg-cream-50 rounded-lg border border-cream-200">
              <span className="text-xs font-semibold text-navy-400">Language / زبان:</span>
              <div className="flex items-center bg-cream-200/80 border border-cream-300 rounded-lg p-0.5 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    language === 'en' ? 'bg-navy text-white' : 'text-navy-400'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('fa')}
                  className={`px-3 py-1 rounded-md transition-all font-persian ${
                    language === 'fa' ? 'bg-navy text-white' : 'text-navy-400'
                  }`}
                >
                  فارسی
                </button>
              </div>
            </div>

            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-navy bg-cream-100' : 'text-navy-400 hover:bg-cream-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/properties" className="btn-primary mt-2 justify-center">
              <span>{t('navGetStarted')}</span>
              <ArrowRightIcon className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
