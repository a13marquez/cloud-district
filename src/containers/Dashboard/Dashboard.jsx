import React from 'react'

import DashboardContainer from '../../components/StyledCenteredGrid/SyledCenteredGrid'

import UsersTable from '../UsersTable/UsersTable'

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <UsersTable />
    </DashboardContainer>
  )
}

export default Dashboard
