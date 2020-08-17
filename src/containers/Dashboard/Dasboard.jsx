import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import DashboardContainer from '../../components/StyledCenteredGrid/SyledCenteredGrid'
import { getUsersByPage } from '../../store/actions/usersActions'

export const Dashboard = () => {
  const usersList = useSelector((state) => state.usersList.usersList)
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchUsers() {
      await dispatch(getUsersByPage())
    }
    fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <DashboardContainer>
      <ul>
        {usersList &&
          usersList.data &&
          usersList.data.map((user) => {
            return <li key={user.id}>{JSON.stringify(user)}</li>
          })}
      </ul>
    </DashboardContainer>
  )
}

export default Dashboard
