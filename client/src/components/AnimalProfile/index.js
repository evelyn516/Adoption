import React from 'react'
import './style.css'

export default function AnimalSnapshot({ animal }) {
    let about = animal.description;
    let aboutMe = about.split('.', 1)[0] + ".";

  return (
    <div className='snapshot'>
        <h2 className='name'>{animal.name}</h2>
        <img src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg" alt={animal.name} />
        <div>
        <p className='age'>Age: {animal.age}</p>
        <p>Size: {animal.q2}</p>
        <p className='about'>Description: {aboutMe}</p>
        <p className='kids'>Can live with children: {animal.q4}</p>
        <p className='others'>Can live with other pets: {animal.q5}</p>
        <p>Owner Activity Level: {animal.q3}</p>
        <p className='home'>Do you have a fenced in garden: {animal.q6}</p>
        <p> How much time will your pet have to spend alone? {animal.q7}</p>
        <p>Training requirements: {animal.q8}</p>
        </div>
    </div>
  )
}
