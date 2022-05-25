import React, {useEffect, useState} from "react";
import AnimalSnapshot from "../../components/AnimalProfile";
import Header from "../../layout/Header";
import "./style.css";

const SeeAllCats = ({api}) => {

    const [cats, setCats] = useState('')
    
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
            return <AnimalSnapshot key={i} animal={animal} api={api} />})} 
        </main>  
        </>
    )
}

export default SeeAllCats;
