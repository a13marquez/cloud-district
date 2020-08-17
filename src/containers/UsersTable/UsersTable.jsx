import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersByPage } from '../../store/actions/usersActions'
import UserRow from '../../components/UserRow/UserRow'

const StyledTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  .table-buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`

const StyledTable = styled.table`
  max-width: 1000px;
  margin: auto;
  margin-bottom: 10px;
  border-collapse: collapse;
  tr {
    height: 40px;
    &::first-of-type {
      td {
        border-top: 1px solid black;
      }
    }
  }
  td {
    border-bottom: 1px solid black;
    padding: 15px;
    text-align: left;
    p {
      max-height: 1.2em;
      overflow-y: hidden;
      margin: 0;
    }
  }
`

const UsersTable = () => {
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
    <StyledTableContainer>
      <StyledTable>
        <thead>
          <tr>
            <td></td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {usersList &&
            usersList.data &&
            usersList.data.map((user) => {
              return <UserRow key={user.id} user={user} />
            })}
        </tbody>
      </StyledTable>
      <div className="table-buttons">
        <button
          onClick={() => dispatch(getUsersByPage(1))}
          disabled={usersList && usersList.page === 1}
        >
          {'<<'}
        </button>
        <button
          onClick={() => dispatch(getUsersByPage(usersList.page - 1))}
          disabled={usersList && usersList.page === 1}
        >
          {'<'}
        </button>
        <span
          style={{
            padding: '0 10px',
          }}
        >
          page {usersList && usersList.page} of {'  '}
          {usersList && usersList.total_pages}
        </span>
        <button
          onClick={() => dispatch(getUsersByPage(usersList.page + 1))}
          disabled={usersList && usersList.page === usersList.total_pages}
        >
          {'>'}
        </button>
        <button
          onClick={() => dispatch(getUsersByPage(usersList.total_pages))}
          disabled={usersList && usersList.page === usersList.total_pages}
        >
          {'>>'}
        </button>
      </div>
    </StyledTableContainer>
  )
}

export default UsersTable
