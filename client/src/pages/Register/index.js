import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../../layout/Header';
import Cookies from 'js-cookie';

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
    <form role='form' onSubmit={handleSubmit}>
        <label htmlFor='username'role='usernameLabel' >Enter Username: </label>
        <input type='text' role='username'  id="username" onChange={(e)=>setUsername(e.target.value)}></input>
        <label htmlFor='password' role='passwordLabel' >Enter Password: </label>
        <input type='password' id='password'  role='password' onChange={(e)=>setPassword(e.target.value)}></input>
        <label htmlFor='confirm_password' role='confirmPasswordLabel' >Confirm Password: </label>
        <input type='password' role='confirmPassword'  id='confirm_password'onChange={(e)=>setConfirmPass(e.target.value)}></input>
        <input type='submit' role='submit'  value='Sign up!'></input>
    </form>
    </>
  )
}

export default Register
