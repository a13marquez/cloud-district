import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions/socialLoginActions'

import LoginPage from './LoginPage/LoginPage'

import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRouter/PrivateRoute'
import NavBar from './NavBar/NavBar'

const googleClientId =
  '235504936120-gfbge9o62rcq8hmo1p0g99vm4ka6gd0t.apps.googleusercontent.com'

function App() {
  useEffect(() => {
    initGoogle()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const dispatch = useDispatch()

  const initGoogle = () =>
    dispatch(
      actions.authServiceLoad('google', {
        clientId: googleClientId,
      })
    )
  const Hello = () => <div>hola</div>

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={'/login'} component={LoginPage} />
        <PrivateRoute exact path={'/'}>
          <Hello />
        </PrivateRoute>
      </Switch>
    </div>
  )
}

App.propTypes = {
  initGoogle: PropTypes.func.isRequired,
}

export default App
