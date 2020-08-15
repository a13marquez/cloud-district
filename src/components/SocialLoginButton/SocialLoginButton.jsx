import React from 'react'
import styled from 'styled-components'

export const StyledSocialLoginButton = styled.button`
  position: relative;
  text-transform: uppercase;
  padding: 0 48px;
  min-height: 54px;
  letter-spacing: 0.02em;
  font-weight: 600;
  border-radius: 100px;
  border-color: #5c5c5c;
  color: #5c5c5c;
  :hover {
    border-color: #2c2c2c;
    color: #2c2c2c;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 767px) {
    padding-left: 40px;
    padding-right: 40px;
    min-height: 42px;
  }
`

const SocialLoginButton = () => <StyledSocialLoginButton />

export default SocialLoginButton
