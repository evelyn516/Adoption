import { default as NavBar } from '.';
import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Shelter NavBar', () => {

    beforeEach(() => {
        render(<NavBar />, { wrapper: MemoryRouter });
    });

    test('it renders the NavBar', () => {
        let loginLink = screen.getByRole('loginLink')
        expect(loginLink).toBeInTheDocument();
        let registerLink = screen.getByRole('registerLink')
        expect(registerLink).toBeInTheDocument();
    });

    test('loginLink redirects to link', () => {
        let loginLink = screen.getByRole('loginLink')
        fireEvent.click(loginLink);
        expect(loginLink).not.toBeInTheDocument();
    });

    test('registerLink redirects to link', () => {
        let registerLink = screen.getByRole('registerLink')
        fireEvent.click(registerLink);
        expect(registerLink).not.toBeInTheDocument();
    });

});


/* import { render, screen} from '@testing-library/react';
import {BrowserRouter, Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import {createMemoryHistory} from 'history';
import App from './App';

test('should redirect and update history', () => {
    const history = createMemoryHistory();

    render(<Router history={history}><App/></Router>);

    userEvent.click(screen.getByText(/About/));

    expect(history.location.pathname).toEqual('/about');
});

test('should redirect and update dom', () => {
    render(<BrowserRouter><App/></BrowserRouter>);

    userEvent.click(screen.getByText(/About/));

    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
}); */
