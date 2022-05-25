import React from "react";
import AnimalSnapshot from "../../components/AnimalProfile";
import Matchability from "../../components/Matchability/index"
import "./style.css";
import {useSelector } from "react-redux";

/* fetch data matches */

const MatchResults = () => {
    console.log('hello')
    let animals = useSelector((state)=> state.quizData)
    console.log(animals)
    return (
        <>
        <header className="title">
            <h1>Your Matches!</h1>
        </header>
        <main>
        {animals.map((animal, i) => {
            return (
                <>
                <AnimalSnapshot key={i} animal={animal} />
                <Matchability key={i} score={animal.score} />
                </>
            )})} 
        </main>  
        </>
    )
}

export default MatchResults;
