import React, { useState, useRef } from 'react'
import RoundImage from '../RoundImage/Roundimage'
import * as actions from '../../store/actions/usersActions'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

const UserRow = ({ user }) => {
  const [isEditing, setisEditing] = useState(false)
  const [userState, setuserState] = useState(user)
  const history = useHistory()
  const dispatch = useDispatch()
  const idInput = useRef(user.id)
  const firstNameInput = useRef(user.first_name)
  const lastNameInput = useRef(user.last_name)
  const emailInput = useRef(user.email)

  const saveData = async () => {
    const id = parseInt(idInput.current.value)
    const firstName = firstNameInput.current.value
    const lastName = lastNameInput.current.value
    const email = emailInput.current.value
    user = {
      id,
      first_name: firstName,
      last_name: lastName,
      email,
      avatar: user.avatar,
    }
    await dispatch({
      type: actions.UPDATE_USER,
      user,
    })
    setuserState(user)
    setisEditing(false)
  }

  return (
    <tr>
      <td>
        <RoundImage alt="User avatar" src={user.avatar} />
        <input
          ref={idInput}
          defaultValue={user.id}
          style={{ display: 'none' }}
        />
      </td>

      {isEditing ? (
        <>
          <td>
            <input
              type="text"
              defaultValue={user.first_name}
              ref={firstNameInput}
              id="first-name-input"
            />
          </td>
          <td>
            <input
              type="text"
              defaultValue={user.last_name}
              ref={lastNameInput}
              id="first-name-input"
            />
          </td>
          <td>
            <input
              type="text"
              defaultValue={user.email}
              ref={emailInput}
              id="first-name-input"
            />
          </td>
          <td></td>
          <td>
            <button onClick={saveData}>Save</button>
          </td>
        </>
      ) : (
        <>
          <td>{userState.first_name}</td>
          <td>{userState.last_name}</td>
          <td>{userState.email}</td>
          <td>
            <button
              name="user-detail"
              onClick={() => history.push(`users/${user.id}`)}
            >
              <FontAwesomeIcon icon={faIdCard} />
            </button>
          </td>
          <td>
            <button onClick={() => setisEditing(true)}>Edit</button>
          </td>
        </>
      )}
    </tr>
  )
}

export default UserRow
