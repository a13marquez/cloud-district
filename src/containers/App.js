import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../store/actions/socialLoginActions'

import LoginPage from './LoginPage/LoginPage'

import { Switch, Route, Link, withRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRouter/PrivateRoute'

import { getUser } from '../store/reducers'

const googleClientId =
  '235504936120-gfbge9o62rcq8hmo1p0g99vm4ka6gd0t.apps.googleusercontent.com'

function AppContainer({ initGoogle, user }) {
  useEffect(() => {
    initGoogle()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const Hello = () => <div>hola</div>

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={'/login'} component={LoginPage} />
        <PrivateRoute exact path={'/'}>
          <Hello />
        </PrivateRoute>
      </Switch>
    </div>
  )
}

AppContainer.propTypes = {
  initGoogle: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  user: getUser(state),
})

const mapDispatchToProps = (dispatch) => ({
  initGoogle: () =>
    dispatch(
      actions.authServiceLoad('google', {
        clientId: googleClientId,
      })
    ),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppContainer)
)
