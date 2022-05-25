import React, {useEffect, useState} from "react";
import AnimalSnapshot from "../../components/AnimalProfile";
import Header from "../../layout/Header";
import "./style.css";

const SeeAllDogs = () => {

    const [dogs, setDogs] = useState('')

    const api = 'https://lap4-test.herokuapp.com/';
    
    useEffect(()=>{
    (
        async () =>{
            const response = await fetch(`${api}posts/animal/dogs/`)
            const content = await response.json()
            console.log(content)
            setDogs(content)
        }
        )
        ()
    }, [])




    return (
        <>
        <Header/>
        <header className="title">
            <h1>Meet the Dogs</h1>
        </header>
        <main>
        {dogs && dogs.map( animal => {
            return <AnimalSnapshot key={animal.ref} animal={animal} />})} 
        </main>  
        </>
    )
}

export default SeeAllDogs;
