import React from "react";
import AnimalSnapshot from "../../components/AnimalSnapshot";
import "./style.css";

const SeeAll = ({ animals }) => {
    return (
        animals.map( animal => {
            return <AnimalSnapshot key={animal.ref} animal={animal} />
        })   
    )
}

export default SeeAll;
