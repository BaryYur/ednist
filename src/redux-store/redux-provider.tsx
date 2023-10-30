import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './config'

export function ReduxProvider (props)  {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {props.children}
    </PersistGate>
  </Provider>
}