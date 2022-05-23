import React from 'react'
import './style.css'

export default function AnimalSnapshot({ animal }) {
    let about = animal.about;
    let aboutMe = about.split('\.', 1)[0] + ".";

  return (
    <div className='snapshot'>
        <h2 className='name'>{animal.name}</h2>
        <img src={animal.img} alt={animal.name} />
        <p className='age'>Age: {animal.age}</p>
        <p className='breed'>Breed: {animal.breed}</p>
        <p className='sex'>Sex: {animal.sex}</p>
        <p className='kids'>Can live with children: {animal.kids}</p>
        <p className='others'>Can live with other pets: {animal.others}</p>
        <p className='home'>{animal.home}</p>
        <p className='about'>{aboutMe}</p>
    </div>
  )
}
