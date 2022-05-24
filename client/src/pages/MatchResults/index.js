import React from "react";
import AnimalSnapshot from "../../components/AnimalProfile";
import Matchability from "../../components/Matchability";
import "./style.css";

/* fetch data matches */

const SeeAll = ({ animals }) => {
    return (
        <>
        <header className="title">
            <h1>Your Matches!</h1>
        </header>
        <main>
        {animals.map( animal => {
            return (
                <>
                <AnimalSnapshot key={animal.ref} animal={animal} />
                <Matchability score={animal.score} />
                </>
            )})} 
        </main>  
        </>
    )
}

export default SeeAll;
