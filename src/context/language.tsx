import React, { useCallback, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

interface LanguageContextType {
  language: string
  toggleLanguage: (lang: string) => void
}

const LanguageContext = React.createContext({} as LanguageContextType)

export const LanguageProvider = ({ children } : { children: React.ReactNode }) => {
  const [lang, setLang] = useState('ua')
  const { i18n } = useTranslation()

  useEffect(() => {
    toggle(lang)
  }, [])

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