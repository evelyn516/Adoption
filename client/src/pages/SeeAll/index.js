import React from "react";
import AnimalSnapshot from "../../components/AnimalProfile";
import Header from "../../layout/Header";
import "./style.css";

const SeeAll = ({ animals, type }) => {
    return (
        <>
        <Header/>
        <header className="title">
            <h1>Meet the {type}</h1>
        </header>
        <main>
        {animals.map( animal => {
            return <AnimalSnapshot key={animal.ref} animal={animal} />})} 
        </main>  
        </>
    )
}

export default SeeAll;
