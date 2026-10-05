import { useFavorites } from '../context/FavoritesContext'
import { useLanguage } from '../context/LanguageContext'
import { HeartIcon, HeartFilledIcon } from './icons'

interface Props {
  id: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
}

export default function FavoriteButton({ id, size = 'md', variant = 'light' }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const { t } = useLanguage()
  const fav = isFavorite(id)
  const sizes = { sm: 'w-8 h-8', md: 'w-10 h-10', lg: 'w-12 h-12' }
  const iconSizes = { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6' }

  return (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(id) }}
      aria-label={fav ? t('removeFromFavorites') : t('addToFavorites')}
      aria-pressed={fav}
      className={`${sizes[size]} rounded-full flex items-center justify-center transition-all duration-300 ${
        variant === 'light'
          ? fav ? 'bg-white text-champagne-dark animate-heart-pop' : 'bg-white/90 text-navy-300 hover:text-champagne-dark'
          : fav ? 'bg-champagne text-white animate-heart-pop' : 'bg-cream-100 text-navy-400 hover:text-champagne-dark'
      }`}
    >
      {fav ? <HeartFilledIcon className={iconSizes[size]} /> : <HeartIcon className={iconSizes[size]} />}
    </button>
  )
}
