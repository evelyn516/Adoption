import React, {useState} from 'react';
import { Modal } from '@mui/material';
import './style.css'
/* drawer and paper imports for styling  */

export default function ContactModal(petName = "Troy", ref = 32) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const subjectLine = `Questions about ${petName}, Reference: ${ref}`

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
          <form className='emailForm'>
            <label id="emailAddressLabel">Your email address:</label>
            <input type="text" id="emailAddress" name="emailAddress" placeholder='from@example.com'/>
            <label id="emailContentLabel">subject: (optional)</label>
            <input type="text" id="emailSubject" name="emailSubject" placeholder={subjectLine}/>
            <label id="emailContentLabel">email content</label>
            <input type="text" id="emailContent" name="emailContent" placeholder='Please write your questions here'/>
          </form>
        </div>
      </Modal>
    </div>
  );
}


