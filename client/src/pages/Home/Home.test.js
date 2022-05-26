import { default as Home } from '.';
import { screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';

describe('Home Page', () => {

    beforeEach(() => {
        render(<Home />, { wrapper: MemoryRouter });
    });

    test('it renders the Home page with title', () => {
        let title = screen.getByRole('home-title')
        expect(title).toBeInTheDocument();
    });

    test('it renders the Home page with dogsLink', () => {
        let dogsLink = screen.getByRole('dogs')
        expect(dogsLink).toBeInTheDocument();
    });

    test('it renders the Home page with catsLink', () => {
        let catsLink = screen.getByRole('cats')
        expect(catsLink).toBeInTheDocument();
    });

    test('it renders the Home page with quizLink', () => {
        let quizLink = screen.getByRole('quiz')
        expect(quizLink).toBeInTheDocument();
    });
});
 
