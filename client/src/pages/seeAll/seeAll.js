import { React } from "react";
import AnimalSnapshot from "../../components/AnimalProfile/AnimalProfile";

const allPets = ({animals }) => {
    return (
        animals.map( animal => {
            return(
                <AnimalSnapshot key={animal.reference} animal={animal} />
            )
        })   
    )
}

export default allPets;
