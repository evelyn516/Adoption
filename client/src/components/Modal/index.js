import React, {useState} from 'react';
import { Modal } from '@mui/material';
import './style.css'
/* drawer and paper imports for styling  */

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <input type="text" id="emailAddress" name="emailAddress"/>
            <input type="text" id="emailContent" name="emailContent" placeholder='Please write your questions here'/>
          </form>
        </div>
      </Modal>
    </div>
  );
}


