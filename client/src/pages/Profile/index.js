import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../../layout/Header';

function Profile() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    useEffect(()=>{
        (
          async () =>{
            if (!localStorage.getItem('jwt')){
              localStorage.clear()
                navigate('/login')
            } else{
              const token = localStorage.getItem('jwt')
              const options = {
                method : 'POST', 
                body: JSON.stringify({token:token}),
                headers: {'Content-Type': 'application/json'}
              }
              const response = await fetch('http://127.0.0.1:8000/api/auth/', options)
              if(response.status === 500){
                  localStorage.clear()
                  navigate('/login')
              }
            }
          }
        )
        ()
      }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const options = {
            method : 'POST', 
            body: JSON.stringify({name: name, number: number, address: address, email:email}),
            headers: {'Content-Type': 'application/json'}
        }
        const response = await fetch('https://hookb.in/pzVwXbq7xNFKW6N28ojr', options)
    }


  return (
      <>
        <Header/>

      <div>
        <h2>Profile</h2>
        <p>Your Organisation Name: {}</p>
        <p>Your Organisation Number: {}</p>
        <p>Your Shelter's Address: {}</p>
        <p>Your Shelter's Email: {}</p>
        </div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Organisation Name</label>
            <input type='text' id='name' onChange={e=>setName(e.target.value)}></input>

            <label htmlFor='phonenum'>Phone Number</label>
            <input type='tel' id='phonenum' pattern='^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$' onChange={e=>setNumber(e.target.value)}></input>

            <label htmlFor='address'>Shelter's Address</label>
            <input type='textarea' id='address' onChange={e=>setAddress(e.target.value)}></input>

            <label htmlFor='email'>Shelter's Email</label>
            <input type='email' id='email' onChange={e=>setEmail(e.target.value)}></input>

            <input type='submit' value='Update Profile'></input>
        </form>
    </>
  )
}

export default Profile