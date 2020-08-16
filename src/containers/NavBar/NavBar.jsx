import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import cloudDistrictLogo from '../../assets/images/cloud-logo.png'
import { useSelector } from 'react-redux'
import UserInfo from '../UserInfo/UserInfo'

const navBarHeight = '3em'

const StyledNavBar = styled.div`
  /** fixes the navbar to the top */
  position: fixed;
  top: 0;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: ${navBarHeight};
  z-index: 5;
  background-color: #333;
  .left-content {
    display: flex;
    flex-direction: row-reverse;
    width: 55%;
    justify-content: space-between;
    padding: 0 20px;
    img {
      height: 40px;
      left: 100px;
    }
  }
  .right-content {
    display: flex;
    width: 45%;
    padding: 0 20px;
    flex-direction: row-reverse;
    .tabs {
      list-style: none;
      display: flex;
      flex-direction: row;
      li {
        padding: 0 10px;
      }
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`

const NavBar = () => {
  const user = useSelector((state) => state.socialLogin.user)
  return (
    <StyledNavBar>
      <div className="left-content">
        <img src={cloudDistrictLogo} alt="Cloud district logo" />
        {user && user.loggedIn ? <UserInfo /> : null}
      </div>
      <div className="right-content">
        <ul className="tabs">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            {user && user.loggedIn ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </StyledNavBar>
  )
}

export default NavBar
