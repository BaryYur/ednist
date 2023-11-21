import React, { useCallback, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

interface LanguageContextType {
  language: string
  toggleLanguage: (lang: string) => void
}

const LanguageContext = React.createContext({} as LanguageContextType)

export const LanguageProvider = ({ children } : { children: React.ReactNode }) => {
  const storedLanguage = localStorage.getItem('language')
  const initialLanguage = storedLanguage ? JSON.parse(storedLanguage) : 'ua'
  const [lang, setLang] = useState(initialLanguage)
  const { i18n } = useTranslation()

  useEffect(() => {
    localStorage.setItem('language', JSON.stringify(lang))
    toggle(lang)
  }, [lang])

  const toggle = useCallback((lang: string) => {
    i18n.changeLanguage(lang)
    setLang(lang)
  }, [])

  return (
    <LanguageContext.Provider
      value={{
        language: lang,
        toggleLanguage: toggle,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}


export default LanguageContext