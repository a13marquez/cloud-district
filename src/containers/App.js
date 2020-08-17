import React, { useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions/socialLoginActions'

import LoginPage from './LoginPage/LoginPage'

import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRouter/PrivateRoute'
import NavBar from './NavBar/NavBar'
import { Dashboard } from './Dashboard/Dashboard'

import { GoogleClientIdContext } from '../index'

function App() {
  useEffect(() => {
    initGoogle()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const dispatch = useDispatch()
  const googleClientId = useContext(GoogleClientIdContext)
  const initGoogle = () =>
    dispatch(
      actions.authServiceLoad('google', {
        clientId: googleClientId,
      })
    )

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={'/login'} component={LoginPage} />
        <PrivateRoute exact path={'/'}>
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </div>
  )
}

export default App
