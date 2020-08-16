import React from 'react'

import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

const { getUser } = require('../../store/reducers')

function PrivateRoute({ children, ...rest }) {
  const { user } = rest
  debugger
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user && user.loggedIn ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  )
}

const mapStateToProps = (state) => ({
  user: getUser(state),
})

export default withRouter(connect(mapStateToProps, null)(PrivateRoute))
