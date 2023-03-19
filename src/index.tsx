import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './store'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { initialized } from './store/actions'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
store.dispatch(initialized())
reportWebVitals()
