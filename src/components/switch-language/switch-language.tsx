import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// styled components
import * as Elements from './elements'

const LANGUAGES_ITEMS = ['en', 'ua']

export function SwitchLanguage() {
  const [lang, setLang] = useState('ua')
  const { i18n } = useTranslation()

  useEffect(() => {
    toggle(lang)
  }, [])

  const toggle = useCallback((lang: string) => {
    i18n.changeLanguage(lang)
    setLang(lang)
  }, [])

  const renderItem = useCallback((item) => {
    return <Elements.Item
      className={`${lang === item ? 'active' : ''}`}
      onClick={() => toggle(item)}
    >
      {item}
    </Elements.Item>
  }, [lang])

  return <Elements.Container>
    {LANGUAGES_ITEMS.map(renderItem)}
  </Elements.Container>
}
