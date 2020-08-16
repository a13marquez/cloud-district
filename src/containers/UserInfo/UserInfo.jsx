import React from 'react'
import RoundImage from '../../components/RoundImage/Roundimage'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  .user-name {
    height: 100%;
    color: #fff;
    padding-top: 10px;
    padding-left: 15px;
  }
`

const UserInfo = () => {
  const user = useSelector((state) => state.socialLogin.user)

  return (
    <StyledDiv>
      <RoundImage src={user.picture} />
      <span className="user-name">{user.name}</span>
    </StyledDiv>
  )
}

export default UserInfo
