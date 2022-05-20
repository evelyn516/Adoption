import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch()

  const handleClick = () => {
    localStorage.clear()
    dispatch({
      type: 'RESET'
    })
  }

  let menu;
  const username = localStorage.getItem('username')


  if (username === null){
  
    menu = (
      <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/login'>Login</NavLink>
      </>
    )
  } else{
 

    menu = (
      <>
      <NavLink to='/homeauth'>Home</NavLink>
      <NavLink to='/profile'>Edit Profile</NavLink>
      <NavLink to='/login' onClick = {handleClick}>Logout</NavLink>
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