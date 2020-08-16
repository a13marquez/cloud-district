import React from 'react'

import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  const user = useSelector((state) => state.socialLogin.user)
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

export default PrivateRoute
