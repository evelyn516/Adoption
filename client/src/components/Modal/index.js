import React, {useState, useEffect} from 'react';
import { Modal } from '@mui/material';
import './style.css'
/* drawer and paper imports for styling  */

export default function ContactModal({username,animalName,animalId,animalImage, api}) {
  const [open, setOpen] = useState(false);
  const [profileData, setProfileData] = useState([])
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(()=>{
    (
      async () =>{
        const response = await fetch(`${api}profiles/${username}/`)
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
    let emailBody = `Hello ${profileData.name}, \n \n My Message:${e.target.emailContent.value} \n \n My contact details are: \n \t- Email Address: ${e.target.emailAddress.value} \n \t- Telephone Number: ${e.target.telInput.value} \n\n Kind regards, \n ${e.target.nameInput.value}`
    const options = {
      method : 'POST', 
      body: JSON.stringify({to: profileData.email, emailBody: emailBody,animalName:animalName, animalId:animalId}),
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
            <h3>Shelter Information</h3>
          </div>
          <p>Name: {profileData.name}</p>
          <p>Number: {profileData.number}</p>
          <p>Address: {profileData.address}</p>

      <form  onSubmit={handleSubmit}>
        <div >

          <label className='contactForm' id="nameInput">Your name:</label>
          <input type="text" id="nameInput" name="nameInput" placeholder='Enter name...' required/>

          <label className='contactForm' id="emailAddressLabel">Your email address:</label>
          <input type="text" id="emailAddress" name="emailAddress" placeholder='from@example.com' required/>

          <label className='contactForm' id="telLabel">Contact Number:</label>
          <input type="tel" id="telInput" name="telInput" placeholder='0712345678901' required pattern='^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$'/>

         

          <label className='contactForm' id="emailContentLabel">email content</label>
          <textarea type="text" id="emailContent"  name="emailContent" placeholder='Please write your questions here...' required/>

          <button type="submit" id='emailSubmit'>Send Email</button>
        </div>
      </form>

        </div>
      </Modal>
    </div>
  );
}


