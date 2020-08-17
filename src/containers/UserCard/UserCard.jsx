import React, { useState, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import UsersService from '../../services/UsersService'
import RoundImage from '../../components/RoundImage/Roundimage'
import UserContainer from '../../components/StyledCenteredGrid/SyledCenteredGrid'

const StyledCard = styled.div`
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  .name {
    margin: 0;
  }
`

const UserCard = () => {
  const history = useHistory()
  const [user, setUser] = useState()
  useLayoutEffect(() => {
    const id = history.location.pathname.split('/')[2]
    const fetchUser = async (id) => {
      const { data } = await UsersService.getUserById(id)
      setUser(data.data)
    }
    fetchUser(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <UserContainer>
      <StyledCard>
        <RoundImage src={user && user.avatar} alt="user avatar" />
        <div className="name">
          <b>Name</b>: {user && user.first_name}{' '}
        </div>
        <div className="name">
          <b>Last Name</b>: {user && user.first_name}{' '}
        </div>
        <div className="name">
          <b>Email</b>: {user && user.email}{' '}
        </div>
      </StyledCard>
    </UserContainer>
  )
}

export default UserCard
