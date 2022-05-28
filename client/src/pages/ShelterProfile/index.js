import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../../layout/Header';
import './style.css'

function Profile({api}) {
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
              const response = await fetch(`${api}api/auth/`, options)
              if(response.status === 500){
                  localStorage.clear()
                  navigate('/login')
              }
            }
          }
        )
        ()
      })


      useEffect(()=>{
        (
          async () =>{
            let username = localStorage.getItem('username')
            const response = await fetch(`${api}profiles/${username}/`)
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
        await fetch(`${api}profiles/${username}/`, options)
        setRefresh(!refresh)
    }


  return (
      <>
        <Header/>

      <div className='current_profile'>
        <h2>Current Profile</h2>
        <p>Shelter Name: {retrieveUser}</p>
        <p>Shelter's Address: {retrieveAddress}</p>
        <p>Organisation Number: {retrieveNumber}</p>
        <p>Shelter's Email: {retrieveEmail}</p>
      </div>
      <form className='profilePage' onSubmit={handleSubmit}>
        <div className="profileContainer">
        <h2>Update Profile</h2>
            <label htmlFor='name'>Shelter Name</label>
            <input type='text' id='name' placeholder='Shelter Name' required onChange={e=>setName(e.target.value)}></input>

            <label htmlFor='phonenum'>Phone Number</label>
            <input type='tel' id='phonenum' placeholder='Phone Number' required pattern='^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$' onChange={e=>setNumber(e.target.value)}></input>

            <label htmlFor='address'>Shelter Address</label>
            <input type='textarea' id='address' placeholder="Address" required onChange={e=>setAddress(e.target.value)}></input>

            <label htmlFor='email'>Shelter Email</label>
            <input type='email' id='email' placeholder="abc@example.com" required onChange={e=>setEmail(e.target.value)}></input>
            <button type="submit">Update Profile</button>
        </div>
      </form>
    </>
  )
}

export default Profile
