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
  width: 100%;
  background-color: #fff

  :hover {
    border-color: #2c2c2c;
    color: #2c2c2c;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    .button-img {
      width: 24px;
      height: 24px;
      z-index: 1;
      position: absolute;
      left: 16px;
    }
    . button-text {
      z-index: 1;
      position: relative;
      display: inline-block;
    }
  }
  @media only screen and (max-width: 767px) {
    padding-left: 40px;
    padding-right: 40px;
    min-height: 42px;
  }
`

const SocialLoginButton = ({ text, img, onClickCb }) => (
  <StyledSocialLoginButton onClick={onClickCb}>
    <span className="button-img">{img}</span>
    <span className="button-text">{text}</span>
  </StyledSocialLoginButton>
)

export default SocialLoginButton
