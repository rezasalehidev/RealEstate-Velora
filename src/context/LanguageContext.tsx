import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import {
  translations,
  propertyTranslations,
  toPersianDigits,
  formatCurrency,
  type Language,
  type Direction,
  type TranslationKey,
} from '../i18n/translations'
import type { Property } from '../types'

interface LocalizedPropertyInfo {
  title: string
  location: string
  city: string
  description: string
  type: string
  status: string
  amenities: string[]
  features: string[]
}

interface LanguageContextType {
  language: Language
  direction: Direction
  isRTL: boolean
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: (key: TranslationKey, params?: Record<string, string | number>) => string
  formatNumber: (n: number | string) => string
  formatPrice: (price: number) => string
  getLocalizedProperty: (property: Property) => LocalizedPropertyInfo
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = 'everlight-language'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'fa') return saved
      // Detect browser language
      if (typeof navigator !== 'undefined' && navigator.language?.startsWith('fa')) {
        return 'fa'
      }
    } catch {
      // fallback
    }
    return 'en'
  })

  const direction: Direction = language === 'fa' ? 'rtl' : 'ltr'
  const isRTL = direction === 'rtl'

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // ignore
    }

    document.documentElement.lang = language
    document.documentElement.dir = direction

    if (isRTL) {
      document.documentElement.classList.add('rtl-layout')
      document.body.classList.add('font-persian')
    } else {
      document.documentElement.classList.remove('rtl-layout')
      document.body.classList.remove('font-persian')
    }
  }, [language, direction, isRTL])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'en' ? 'fa' : 'en'))
  }

  const t = useMemo(() => {
    return (key: TranslationKey, params?: Record<string, string | number>): string => {
      const dict = translations[language] || translations.en
      let str: string = dict[key] || translations.en[key] || key

      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          const val = language === 'fa' && typeof v === 'number' ? toPersianDigits(v) : String(v)
          str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), val)
        })
      }

      return str
    }
  }, [language])

  const formatNumber = (n: number | string): string => {
    return language === 'fa' ? toPersianDigits(n) : String(n)
  }

  const formatPrice = (price: number): string => {
    return formatCurrency(price, language)
  }

  const getLocalizedProperty = (property: Property): LocalizedPropertyInfo => {
    if (language === 'fa' && propertyTranslations[property.id]) {
      const custom = propertyTranslations[property.id]
      return {
        title: custom.title,
        location: custom.location,
        city: custom.city,
        description: custom.description,
        type: custom.type,
        status: custom.status,
        amenities: custom.amenities,
        features: custom.features,
      }
    }

    // Type and status translations in Persian
    const typeTranslations: Record<string, string> = {
      Villa: 'ویلا',
      Penthouse: 'پنت‌هاوس',
      Apartment: 'آپارتمان',
      Estate: 'عمارت',
      Townhouse: 'تاون‌هاوس',
      Mansion: 'قصر مدرن',
    }

    const statusTranslations: Record<string, string> = {
      'For Sale': 'برای فروش',
      'For Rent': 'برای اجاره',
    }

    return {
      title: property.title,
      location: property.location,
      city: property.city,
      description: property.description,
      type: language === 'fa' ? (typeTranslations[property.type] || property.type) : property.type,
      status: language === 'fa' ? (statusTranslations[property.status] || property.status) : property.status,
      amenities: property.amenities,
      features: property.features,
    }
  }

  const value = {
    language,
    direction,
    isRTL,
    setLanguage,
    toggleLanguage,
    t,
    formatNumber,
    formatPrice,
    getLocalizedProperty,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
