import React from 'react'
import './style.css'

export default function AnimalSnapshot({ animal }) {
    let about = animal.about;
    let aboutMe = about.split('\.', 1)[0] + ".";

    /* if statement for can live with other cats/dogs */

  return (
    <div class='snapshot'>
        <h2>{animal.name}</h2>
        <img>{animal.img}</img>
        <p>Age: {animal.age}</p>
        <p>Breed: {animal.breed}</p>
        <p>Sex: {animal.sex}</p>
        <p>Can live with children: {animal.kids}</p>
        <p>Can live with other pets: {animal.others}</p>
        <p>{animal.home}</p>
        <p>{aboutMe}</p>
    </div>
  )
}
