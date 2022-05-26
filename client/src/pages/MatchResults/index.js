import React from "react";
import AnimalSnapshot from "../../components/AnimalProfile";
import Matchability from "../../components/Matchability";
import "./style.css";

/* fetch data matches */

const SeeAll = ({ animals }) => {
    return (
        <>
        <header className="title" role="matchesTitle">
            <h1>Your Matches!</h1>
        </header>
        <main>
        {animals.map( animal => {
            return (
                <>
                <div className="animalCard">
                    <AnimalSnapshot key={animal.ref} animal={animal} />
                    <Matchability score={animal.score} />
                </div>
                </>
            )})} 
        </main>  
        </>
    )
}

export default SeeAll;
