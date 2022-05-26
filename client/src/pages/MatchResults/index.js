import React from "react";
import AnimalSnapshot from "../../components/AnimalProfile";
import Matchability from "../../components/Matchability/index"
import "./style.css";
import {useSelector } from "react-redux";
import Header from "../../layout/Header";

/* fetch data matches */

const MatchResults = ({api}) => {
    console.log('hello')
    let animals = useSelector((state)=> state.quizData)
    console.log(animals)
    return (
        <>
        <Header/>
        <header className="title">
            <h1>Your Matches!</h1>
        </header>
        <main>
        {animals.map((animal, i) => {
            return (
                <>
                <AnimalSnapshot key={i} animal={animal} api={api} />
                <Matchability key={i} score={animal.score} />
                </>
            )})} 
        </main>  
        </>
    )
}

export default MatchResults;
