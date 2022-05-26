import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../../layout/Header';

function Profile() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    const [retrieveUser, setRetrieveUser] = useState('')
    const [retrieveNumber, setRetrieveNumber] = useState('')
    const [retrieveAddress, setRetrieveAddress] = useState('')
    const [retrieveEmail, setRetrieveEmail] = useState('')

    const [refresh, setRefresh] = useState(false)

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


      useEffect(()=>{
        (
          async () =>{
            let username = localStorage.getItem('username')
            const response = await fetch(`http://127.0.0.1:8000/profiles/${username}/`)
            const content = await response.json()
            setRetrieveAddress(content.address)
            setRetrieveEmail(content.email)
            setRetrieveNumber(content.number)
            setRetrieveUser(content.name)
          }
        )
        ()
      })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const options = {
            method : 'PUT', 
            body: JSON.stringify({name: name, number: number, address: address, email:email}),
            headers: {'Content-Type': 'application/json'}, withCredentials: true
        }
        let username = localStorage.getItem('username')
        await fetch(`http://127.0.0.1:8000/profiles/${username}/`, options)
        setRefresh(!refresh)
    }


  return (
      <>
        <Header/>

      <div>
        <h2 role='profile'>Profile</h2>
        <p role='orgName'>Your Organisation Name: {retrieveUser}</p>
        <p role='orgNo'>Your Organisation Number: {retrieveNumber}</p>
        <p role='sheltAdd'>Your Shelter's Address: {retrieveAddress}</p>
        <p role='sheltEmail'>Your Shelter's Email: {retrieveEmail}</p>
        </div>
        <form role='form' onSubmit={handleSubmit}>
            <label htmlFor='name' role='orgNameLabel'>Organisation Name</label>
            <input type='text' id='name' role='orgNameInput' onChange={e=>setName(e.target.value)}></input>

            <label htmlFor='phonenum' role='numberLabel'>Phone Number</label>
            <input role='numberInput' type='tel' id='phonenum' pattern='^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$' onChange={e=>setNumber(e.target.value)}></input>

            <label role='addressLabel' htmlFor='address'>Shelter's Address</label>
            <input role='addressInput' type='textarea' id='address' onChange={e=>setAddress(e.target.value)}></input>

            <label role='emailAddressLabel' htmlFor='email'>Shelter's Email</label>
            <input type='email' role='emailAddressInput' id='email' onChange={e=>setEmail(e.target.value)}></input>

            <input type='submit' role='submit' value='Update Profile'></input>
        </form>
    </>
  )
}

export default Profile
