import React from 'react'
import Collapsible from '../Collapsible';
import ContactModal from '../Modal';
import './style.css'

export default function AnimalSnapshot({ animal }) {

  return (
    <div className='snapshot'>
        <h2 className='name'>{animal.name}</h2>
        <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt={animal.name} />
        
        <p className='age'>Age: {animal.age}</p>
        <p className='breed'>Breed: {animal.breed}</p>
        <p className='sex'>Sex: {animal.sex}</p>
        <p className='kids'>Can live with children: {animal.kids}</p>
        <p className='others'>Can live with other pets: {animal.others}</p>
        <p className='home'>{animal.home}</p>
        <Collapsible closed>
            {animal.about}
            {/* Shelter info! */}
        </Collapsible> 
        <ContactModal /> 
    </div>
  )
};
