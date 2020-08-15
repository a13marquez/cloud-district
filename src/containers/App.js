import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../store/actions/socialLoginActions'

const googleClientId =
  '235504936120-gfbge9o62rcq8hmo1p0g99vm4ka6gd0t.apps.googleusercontent.com'

function AppContainer({ initGoogle }) {
  useEffect(() => {
    initGoogle()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App">
      <div> </div>{' '}
    </div>
  )
}

AppContainer.propTypes = {
  initGoogle: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  initGoogle: () =>
    dispatch(
      actions.authServiceLoad('google', {
        clientId: googleClientId,
      })
    ),
})

export default connect(null, mapDispatchToProps)(AppContainer)
