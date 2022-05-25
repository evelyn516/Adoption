import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import './style.css'

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
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
      <li><NavLink to='/register'>Register</NavLink></li>
      </>
    )
  } else if(username){
    menu = (
      <>
      <li><NavLink to='/homeauth'>Home</NavLink></li>
      <li><NavLink to='/profile'>Edit Profile</NavLink></li>
      <li><NavLink to='/' onClick = {handleClick}>Logout</NavLink></li>
      </>
    )
  }

  return (
    <>
    <nav>
      <ul className='horizontal'>
          {menu}
      </ul>
    </nav>
    </>
  )
}

export default Header