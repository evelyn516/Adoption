import React from 'react'
import Collapsible from '../Collapsible';
import ContactModal from '../Modal';
import './style.css'

export default function AnimalSnapshot({ animal }) {

  return (
    <div className='snapshot'>
        <h2 className='name'>{animal.name}</h2>
        <img src={animal.img} alt={animal.name} />
        <div className='messageMe'>
            <h4>Message me if...</h4>
            <p>{animal.message}</p>
        <ContactModal /* petName={animal.name} ref={animal.ref} */ /> 
        </div>
        <p className='age'>Age: {animal.age}</p>
        <p className='breed'>Breed: {animal.breed}</p>
        <p className='sex'>Sex: {animal.sex}</p>
        <p className='kids'>Can live with children: {animal.kids}</p>
        <p className='others'>Can live with other pets: {animal.others}</p>
        <p className='home'>{animal.home}</p>
        <Collapsible closed>
            {animal.about}
            {/* shelterinfo */}
        </Collapsible> 
    </div>
  )
};
