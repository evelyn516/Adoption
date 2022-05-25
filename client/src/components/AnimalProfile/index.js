import React from 'react'
import Collapsible from '../Collapsible';
import ContactModal from '../Modal';
import './style.css'

export default function AnimalSnapshot({ animal }) {

  return (
    <div className='snapshot'>
        <h2 className='name' role='name'>{animal.name}</h2>
        <img role='img' src={animal.img} alt={animal.name} />
        <div role='message' className='messageMe'>
            <ContactModal /* petName={animal.name} ref={animal.ref} */ /> 
            <h4 className='messageTitle'>Message me if...</h4>
            <p className='message'>{animal.message}</p>
        </div>
        <p className='age' role='age'>Age: {animal.age}</p>
        <p className='breed' role='breed'>{animal.breed}</p>
        <p className='sex'role="gender">Sex: {animal.sex}</p>
        <p className='kids' role='kids'>Can live with children: <br/>{animal.kids}</p>
        <p className='others' role='others'>Can live with other pets: <br/>{animal.others}</p>
        <p className='home' role='home'>{animal.home}</p>
        <Collapsible closed >
            {animal.about}
            {/* shelterinfo */}
        </Collapsible> 
    </div>
  )
};
