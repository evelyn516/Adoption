import { default as NavBar } from '.';
import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter, BrowserRouter, Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import '@testing-library/jest-dom'

describe('Shelter NavBar', () => {

    beforeEach(() => {
        render(<NavBar />, { wrapper: MemoryRouter });
    });

    test('it renders the nav', () => {
        let nav = screen.getByRole('nav')
        expect(nav).toBeInTheDocument();
    });

    test('it renders the loginLink', () => {
        let loginLink = screen.getByRole('loginLink')
        expect(loginLink).toBeInTheDocument();
    });

    test('it renders the registerLink', () => {
        let registerLink = screen.getByRole('registerLink')
        expect(registerLink).toBeInTheDocument();
    });

});



