import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { socialLoginrequest } from '../../store/actions/socialLoginActions'

import SocialLoginButton from '../../components/SocialLoginButton/SocialLoginButton'

const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`
const ButtonsContainer = styled.div`
  display: block;
  width: 440px;
  text-align: center;
  padding: 36px 44px;
`

const LoginPage = ({ loginGoogle, history }) => {
  return (
    <LoginContainer>
      <ButtonsContainer>
        <SocialLoginButton
          text="Login with Google"
          onClickCb={loginGoogle(history)}
        />
      </ButtonsContainer>
    </LoginContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  loginGoogle: (history) => () =>
    dispatch(socialLoginrequest('google', { history })),
})

export default connect(null, mapDispatchToProps)(LoginPage)
