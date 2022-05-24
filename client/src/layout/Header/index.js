import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

function Header() {
  let menu;
  let username; 
  const dispatch = useDispatch()

  const handleClick = () => {
    localStorage.clear()
    dispatch({
      type: 'RESET'
    })
  }
  
  let usernameState = useSelector(state=> state.username)

  if (usernameState){
    username = usernameState
  } else{
    username = localStorage.getItem('username')
  }


  if (username === null || username === '' || username ===undefined){
    menu = (
      <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/login'>Login</NavLink>
      </>
    )
  } else if(username){
    menu = (
      <>
      <NavLink to='/homeauth'>Home</NavLink>
      <NavLink to='/profile'>Edit Profile</NavLink>
      <NavLink to='/' onClick = {handleClick}>Logout</NavLink>
      </>
    )
  }

  return (
    <nav>
        {menu}
    </nav>
  )
}

export default Header