import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions/socialLoginActions'

import SocialLoginButton from '../../components/SocialLoginButton/SocialLoginButton'
import googleIcon from '../../assets/images/googleIcon.svg'
import { useHistory } from 'react-router-dom'
import LoginContainer from '../../components/StyledCenteredGrid/SyledCenteredGrid'
import { GoogleClientIdContext } from '../..'

const ButtonsContainer = styled.div`
  display: block;
  width: 440px;
  text-align: center;
  padding: 36px 44px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #ece9e5;
`

const LoginPage = () => {
  useEffect(() => {
    if (!window.gapi) {
      initGoogle()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const dispatch = useDispatch()
  const history = useHistory()
  const googleClientId = useContext(GoogleClientIdContext)
  const initGoogle = () =>
    dispatch(
      actions.authServiceLoad('google', {
        clientId: googleClientId,
      })
    )
  const loginGoogle = (history) => () =>
    dispatch(actions.socialLoginrequest('google', {}))
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

export default LoginPage
