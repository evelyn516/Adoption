import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../../layout/Header';

function Register() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const options = {
            method : 'POST', 
            body: JSON.stringify({username: username, password: password, password_confirmation: confirmPass}),
            headers: {'Content-Type': 'application/json'}
        }
        await fetch('http://127.0.0.1:8000/api/register/', options)
        setRedirect(true)
    }

    if (redirect){
        return navigate('/login')
    }

  return (
    <>
    <Header/>

    <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Enter Username: </label>
        <input type='text' id="username" onChange={(e)=>setUsername(e.target.value)}></input>
        <label htmlFor='password'>Enter Password: </label>
        <input type='password' id='password' onChange={(e)=>setPassword(e.target.value)}></input>
        <label htmlFor='confirm_password'>Confirm Password: </label>
        <input type='password' id='confirm_password'onChange={(e)=>setConfirmPass(e.target.value)}></input>
        <input type='submit' value='Sign up!'></input>
    </form>
    </>
  )
}

export default Register