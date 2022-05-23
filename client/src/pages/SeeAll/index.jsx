import React from "react";
import AnimalSnapshot from "../../components/AnimalSnapshot";
import "./style.css";

const SeeAll = ({animals }) => {

  return (
      animals.map( animal => {
          return(
              <AnimalSnapshot key={animal.reference} animal={animal} />
          )
      })   
  )
}

export default SeeAll;
