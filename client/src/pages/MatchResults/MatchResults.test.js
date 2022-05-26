import { default as SeeAll } from '.';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('SeeAll Matches', () => {
    let testAnimal = [
        { 
            "name": "DogName",
            "img": "https://www.battersea.org.uk/sites/default/files/animal_images/00P8e000001EyImEAK.jpeg",
            "ref" : 393601,
            "message": "You love cheese and a nap on the couch.",
            "age" : 100,
            "active" : "No",
            "kids" : "Yes - teenagers",
            "breed": "SpaceDog",
            "sex": "M",
            "others": "Y - dogs and cats",
            "size": "Small",
            "company": "YES",
            "training": "No",
            "home": "I can live anywhere",
            "about": "Little man Troy is an older gent who has found kennelling difficult and is stressed in kennels when on his own, and barks a lot during the day when on his own."}, 
        { 
            "name": "DogName",
            "img": "https://www.battersea.org.uk/sites/default/files/animal_images/00P8e000001EyImEAK.jpeg",
            "ref" : 393601,
            "message": "You love cheese and a nap on the couch.",
            "age" : 100,
            "active" : "No",
            "kids" : "Yes - teenagers",
            "breed": "SpaceDog",
            "sex": "M",
            "others": "Y - dogs and cats",
            "size": "Small",
            "company": "YES",
            "training": "No",
            "home": "I can live anywhere",
            "about": "Little man Troy is an older gent who has found kennelling difficult and is stressed in kennels when on his own, and barks a lot during the day when on his own."}]


    beforeEach(() => {

        render( 
        <SeeAll >
            {testAnimal}
        </SeeAll>);
    });


    test('it renders the title', () => {
        let title = screen.getByRole('matchesTitle')
        expect(title).toBeInTheDocument();
        expect(title).toContainHTML("Your Matches!");
    });

    //check that it renders the first match
});
