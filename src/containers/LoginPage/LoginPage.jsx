import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { socialLoginrequest } from '../../store/actions/socialLoginActions'

import SocialLoginButton from '../../components/SocialLoginButton/SocialLoginButton'
import googleIcon from '../../assets/images/googleIcon.svg'

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
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #ece9e5;
`

const LoginPage = ({ loginGoogle, history }) => {
  const img = <img src={googleIcon} alt="Google Icon" />
  return (
    <LoginContainer>
      <ButtonsContainer>
        <SocialLoginButton
          text="Login with Google"
          img={img}
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
