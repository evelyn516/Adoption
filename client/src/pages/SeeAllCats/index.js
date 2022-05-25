import React, {useEffect, useState} from "react";
import AnimalSnapshot from "../../components/AnimalProfile";
import Header from "../../layout/Header";
import "./style.css";

const SeeAllCats = () => {

    const [cats, setCats] = useState('')

    const api = 'https://lap4-test.herokuapp.com/';
    
    useEffect(()=>{
    (
        async () =>{
            const response = await fetch(`${api}posts/animal/cats/`)
            const content = await response.json()
            console.log(content)
            setCats(content)
        }
        )
        ()
    }, [])




    return (
        <>
        <Header/>
        <header className="title">
            <h1>Meet the Cats</h1>
        </header>
        <main>
        {cats && cats.map( (animal, i) => {
            return <AnimalSnapshot key={i} animal={animal} />})} 
        </main>  
        </>
    )
}

export default SeeAllCats;
