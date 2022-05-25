import React, {useEffect, useState} from "react";
import AnimalSnapshot from "../../components/AnimalProfile";
import Header from "../../layout/Header";
import "./style.css";

const SeeAllCats = () => {

    const [cats, setCats] = useState('')
    
    useEffect(()=>{
    (
        async () =>{
            const response = await fetch(`http://127.0.0.1:8000/posts/animal/cats/`)
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
