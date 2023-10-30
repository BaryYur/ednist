import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { ThemeProvider } from 'styled-components'

// hooks
import { useTheme } from 'hooks'

// store
import { ReduxProvider } from 'redux-store'

// router
import { Router } from 'router'

// styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'animate.css/animate.compat.css'

// translations
import { EN, UA } from 'translations'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: EN
      },
      ua: {
        translation: UA
      }
    },
    lng: 'ua'
  });

function App() {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider>
        <Router />
      </ReduxProvider>
    </ThemeProvider>
  )
}

export default App
