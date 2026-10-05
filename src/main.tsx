import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { FavoritesProvider } from './context/FavoritesContext'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
