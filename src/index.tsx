import * as React from 'react'
import * as ReactDOM from 'react-dom'

// styles
import './index.css'

// components
import App from './app'

import { LanguageProvider } from './context/language'

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App/>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
