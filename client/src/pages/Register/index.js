import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../../layout/Header';
import './style.css'

function Register() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('http://127.0.0.1:8000/api/register/', {
            method : 'POST', 
            body: JSON.stringify({username: username, password: password, password_confirmation: confirmPass}),
            headers: {'Content-Type': 'application/json'}
        })
        setRedirect(true)
    }

    if (redirect){
        return navigate('/login')
    }

  return (
    <>
    <Header/>

    <form className='registerPage' onSubmit={handleSubmit}>
      <div class="imgcontainer">
      <img src="https://metaversedogcrypto.com/user/assets/img/login%20(1).png" alt="Avatar" class="avatar"/>
      </div>
      <div className="registerContainer">

      <label htmlFor='username'><b>Username</b></label>
        <input type='text' id="username" placeholder="Enter Username" required onChange={(e)=>setUsername(e.target.value)}></input>

        <label htmlFor='password'><b>Password</b></label>
        <input type='password' id='password' placeholder="Enter Password" required onChange={(e)=>setPassword(e.target.value)}></input>

        <label htmlFor='confirm_password'><b>Confirm Password</b></label>
        <input type='password' id='confirm_password' placeholder="Confirm Password" required onChange={(e)=>setConfirmPass(e.target.value)}></input>

        <button type="submit">Sign up!</button>


      </div>
      </form>
    </>
  )
}

export default Register