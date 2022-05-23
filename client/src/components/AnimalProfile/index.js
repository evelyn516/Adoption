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


/* import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import './App.css';
function Collapsible() {
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
function handleOnClick() {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally 
        setExpanded(!isExpanded);
    }
return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                {isExpanded ? 'Collapse' : 'Expand'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    Now you can see the hidden content. <br/><br/>
                    Click again to hide...
                </div>
            </div>
        </div>
    );
}
function App() {
    return (
    <Collapsible/>
    );
}
export default App; */
