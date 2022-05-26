import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import Header from '../../layout/Header';
import Cookies from 'js-cookie';


function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault()
      const responseToken = await fetch('http://127.0.0.1:8000/api/login/', {
        method : 'POST', 
        body: JSON.stringify({username: username, password: password}),
        headers: {'Content-Type': 'application/json'},
      })
      const token = await responseToken.json()
      localStorage.setItem('jwt', token.jwt)
      if (token.jwt){
        const responseAuth = await fetch('http://127.0.0.1:8000/api/auth/', {
          method : 'POST', 
          body: JSON.stringify({token:token.jwt}),
          headers: {'Content-Type': 'application/json'}
        })
        const content = await responseAuth.json()
        localStorage.setItem('username', content.username)
        dispatch({
          type: "SET_USERNAME",
          value: content.username
        })
        setRedirect(true)
      } else if(token.detail){
        alert('Incorrect Username and Passwor')
      }
  }

  if (redirect){
      return navigate('/homeauth')
  }

  return (
    <>
    <Header/>
    <form role='form' onSubmit={handleSubmit}>
        <label htmlFor='username' role='usernameLabel'>Enter Username: </label>
        <input type='text' role='username' id="username" onChange={(e)=>setUsername(e.target.value)} required></input>
        <label htmlFor='password' role='passwordLabel'>Enter Password: </label>
        <input type='password' id='password' role='password' onChange={(e)=>setPassword(e.target.value)} required></input>
        <input type='submit' role='submit' value='Login!'></input>
    </form>
    </>
  )
}

export default Login
