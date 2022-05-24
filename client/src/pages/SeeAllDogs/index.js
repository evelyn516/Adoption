import React, {useEffect, useState} from "react";
import AnimalSnapshot from "../../components/AnimalProfile";
import Header from "../../layout/Header";
import "./style.css";

const SeeAllDogs = ({ animals, type }) => {

    const [dogs, setDogs] = useState('')
    
    useEffect(()=>{
    (
        async () =>{
            const response = await fetch(`http://127.0.0.1:8000/posts/animal/dogs/`)
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
            <h1>Meet the {type}</h1>
        </header>
        <main>
        {dogs && dogs.map( animal => {
            return <AnimalSnapshot key={animal.ref} animal={animal} />})} 
        </main>  
        </>
    )
}

export default SeeAllDogs;
