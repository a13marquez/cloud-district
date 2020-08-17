import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import configureStore, { history } from './store/configureStore'
import { ConnectedRouter as Router } from 'connected-react-router'

const googleClientId =
  '235504936120-gfbge9o62rcq8hmo1p0g99vm4ka6gd0t.apps.googleusercontent.com'

const store = configureStore()

export const GoogleClientIdContext = React.createContext(googleClientId)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <GoogleClientIdContext.Provider value={googleClientId}>
          <App />
        </GoogleClientIdContext.Provider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
