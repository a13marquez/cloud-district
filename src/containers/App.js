import React, { useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions/socialLoginActions'

import LoginPage from './LoginPage/LoginPage'

import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import PrivateRoute from './PrivateRouter/PrivateRoute'
import NavBar from './NavBar/NavBar'
import { Dashboard } from './Dashboard/Dashboard'

import { GoogleClientIdContext } from '../index'
import UserCard from './UserCard/UserCard'

function App() {
  const history = useHistory()
  useEffect(() => {
    initGoogle()
    if (checkLoggedIn()) {
      debugger
      const { name, picture } = JSON.parse(sessionStorage.getItem('userEntity'))
      dispatch(actions.socialLoginSuccess({ user: { name, picture } }))
      history.push('/users')
    }
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

  const checkLoggedIn = () => {
    if (sessionStorage.getItem('userEntity') == null) {
      return false
    }
    return true
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/users">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/users/:id">
          <UserCard />
        </PrivateRoute>

        <Redirect exact path="/" to="/users" />
      </Switch>
    </div>
  )
}

export default App
