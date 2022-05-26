import { default as AnimalSnapshot } from '.';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Animal Snapshot', () => {
    let TestAnimal = { 
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
        "about": "Little man Troy is an older gent who has found kennelling difficult and is stressed in kennels when on his own, and barks a lot during the day when on his own."}

    beforeEach(() => {
        render(<AnimalSnapshot animal={TestAnimal}/>);
    });

    test('it renders the animal name', () => {
        let testName = screen.getByRole('name')
        expect(testName).toBeInTheDocument();
        expect(testName).toContainHTML(TestAnimal["name"]);
    });

    test('it renders the animal age', () => {
        let testAge = screen.getByRole('age')
        expect(testAge).toBeInTheDocument();
        expect(testAge).toContainHTML(`Age: ${TestAnimal["age"]}`);
    });

    test('it renders the animal img', () => {
        let testImg = screen.getByRole('img')
        expect(testImg).toBeInTheDocument();
        expect(testImg).toContainHTML(TestAnimal["img"]);
    });

    test('it renders the animal breed', () => {
        let testBreed = screen.getByRole('breed')
        expect(testBreed).toBeInTheDocument();
        expect(testBreed).toContainHTML(TestAnimal["breed"]);
    });

    test('it renders the animal gender', () => {
        let testGender = screen.getByRole('gender')
        expect(testGender).toBeInTheDocument();
        expect(testGender).toContainHTML("Sex: M");
    });

    test('it renders the animal kids value', () => {
        let testKids = screen.getByRole('kids')
        expect(testKids).toBeInTheDocument();
        expect(testKids).toContainHTML("Can live with children: ");
        expect(testKids).toContainHTML(TestAnimal["kids"]);
    });

    test('it renders the animal others value', () => {
        let testOthers = screen.getByRole('others')
        expect(testOthers).toBeInTheDocument();
        expect(testOthers).toContainHTML("Can live with other pets: ");
        expect(testOthers).toContainHTML(TestAnimal["others"]);
    });
    
    test('it renders the animal preferred home', () => {
        let testHome = screen.getByRole('home')
        expect(testHome).toBeInTheDocument();
        expect(testHome).toContainHTML(TestAnimal["home"]);
    });
});
