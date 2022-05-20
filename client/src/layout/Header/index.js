import React from 'react'
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
  const username = useSelector(state => state.username)

  if (username === ''){
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
      <NavLink to='/auth'>Home</NavLink>
      <NavLink to='/login' onClick = {handleClick}>logout</NavLink>
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