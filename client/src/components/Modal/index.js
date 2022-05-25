import React, {useState, useEffect} from 'react';
import { Modal } from '@mui/material';
import './style.css'


export default function ContactModal({username, api}) {
  const [open, setOpen] = useState(false);
  const [profileData, setProfileData] = useState([])
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <div className='modal' role='modalButton'>
      <button onClick={handleOpen}>Contact Me</button>
      <Modal
        open={open}
        onClose={handleClose}>
        <div className='modalBox' role='modalBox'>
          <div>
            <h3>Shelter Information</h3>
          </div>
          <p role='shelterName'>Name: {profileData.name}</p>
          <p role='shelterNo'>Number: {profileData.number}</p>
          <p role='shelterAdd'>Address: {profileData.address}</p>

      <form className='loginPage' onSubmit={handleSubmit}>
        <div className="loginContainer">
          <label id="emailAddressLabel" role='emailLabel'>Your email address:</label>
          <input type="text" id="emailAddress" name="emailAddress" placeholder='from@example.com'/>

          <label id="emailContentLabel" role='contentLabel'>email content</label>
          <textarea type="text" id="emailContent"  name="emailContent" placeholder='Please write your questions here' role='emailContent'/>

          <button type="submit" role='submitButton'>Submit</button>
        </div>
      </form>

        </div>
      </Modal>
    </div>
  );
}
