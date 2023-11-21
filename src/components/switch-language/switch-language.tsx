import { useCallback, useContext } from 'react'

// styled components
import * as Elements from './elements'
import LanguageContext from "../../context/language";

const LANGUAGES_ITEMS = ['en', 'ua']

export function SwitchLanguage() {
  const { language, toggleLanguage } = useContext(LanguageContext)

  const renderItem = useCallback((item) => {
    return <Elements.Item
      className={`${language === item ? 'active' : ''}`}
      onClick={() => toggleLanguage(item)}
    >
      {item}
    </Elements.Item>
  }, [language])

  return <Elements.Container>
    {LANGUAGES_ITEMS.map(renderItem)}
  </Elements.Container>
}
