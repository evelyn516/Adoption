import React, {useState, useEffect} from 'react';
import { Modal } from '@mui/material';
import './style.css'
/* drawer and paper imports for styling  */

export default function ContactModal({username}) {
  const [open, setOpen] = useState(false);
  const [profileData, setProfileData] = useState([])
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const api = 'https://lap4-test.herokuapp.com/';

  useEffect(()=>{
    (
      async () =>{
        const response = await fetch(`${api}${username}/`)
        const content = await response.json()
        console.log(content)
        setProfileData(content)
      }
    )
    ()
  }, [open])
  

  // const subjectLine = `Questions about ${petName}, Reference: ${ref}`

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const options = {
      method : 'POST', 
      body: JSON.stringify({to: e.target.emailAddress.value, emailBody: e.target.emailContent.value}),
      headers: {'Content-Type': 'application/json'},
    }
    const response = await fetch(`${api}send/`, options)
    const content = await response.json()
    console.log(content)
  }

  return (
    <div className='modal'>
      <button onClick={handleOpen}>Contact Me</button>
      <Modal
        open={open}
        onClose={handleClose}>
        <div className='modalBox'>
          <div>
            <h3>Email me!</h3>
          </div>
          <p>Organisation Name: {profileData.name}</p>
          <p>Organisation Number: {profileData.number}</p>
          <p>Organisation Address: {profileData.address}</p>
          <form className='emailForm' onSubmit={handleSubmit}>
            <label id="emailAddressLabel">Your email address:</label>
            <input type="text" id="emailAddress" name="emailAddress" placeholder='from@example.com'/>
            <label id="emailContentLabel">email content</label>
            <textarea type="text" id="emailContent" name="emailContent" placeholder='Please write your questions here'/>
            <input type="submit" />
          </form>
        </div>
      </Modal>
    </div>
  );
}


