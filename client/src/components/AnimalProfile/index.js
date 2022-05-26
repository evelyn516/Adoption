import React from "react";
import Collapsible from "../Collapsible";
import ContactModal from "../Modal";
import "./style.css";

export default function AnimalSnapshot({ animal, api }) {
  console.log(animal)


  
  return (
    <div className="snapshot">
      <h2 className="name">{animal.name}</h2>
      <img
        src={animal.image}
        alt={animal.name}
      />
      <div>
      <p className="age">Age: {animal.age}</p>
      <p className="sex">Big or Small? {animal.q2}</p>
      <p className="active">Are you an active person? {animal.q3}</p>
      <p className="active">Do you have any children at home? {animal.q4}</p>
      <p className="others">Can live with other pets: {animal.q5}</p>
      <p className="kids">Do you have fenced in garden: {animal.q6}</p>
      <p className="kids">How much time will your pet have to spend alone: {animal.q7}</p>
      <p className="kids">Would you be able to take a pet that needs extra training: {animal.q8}</p>
      <p className="home">{animal.home}</p>
      </div>
      <ContactModal username={animal.username} api={api}/>
      <Collapsible closed>
      <p className="Description">Description: {animal.description}</p>
      </Collapsible>
      {/* <ContactModal/> */}
    </div>
  );
}
