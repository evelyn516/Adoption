import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import Header from '../../layout/Header';
import Cookies from 'js-cookie';
import './style.css'

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
    <form className='loginPage' onSubmit={handleSubmit}>
      <div class="imgcontainer">
      <img src="https://metaversedogcrypto.com/user/assets/img/login%20(1).png" alt="Avatar" class="avatar"/>
      </div>
      <div className="loginContainer">
        <label htmlFor='username'><b>Username</b></label>
        <input type='text' id="username" onChange={(e)=>setUsername(e.target.value)} required placeholder="Enter Username" ></input>

        <label htmlFor='password'><b>Password</b></label>
        <input type='password' id='password' onChange={(e)=>setPassword(e.target.value)} required placeholder="Enter Password"></input>

        <button type="submit">Login</button>
        <div className='remember_forgot'>
          <label>
            <input type="checkbox"  name="remember"/> Remember me
          </label>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </div>
     
      </form>
    </>
  )
}

export default Login
