import { default as Register } from '.';
import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter, BrowserRouter, Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import '@testing-library/jest-dom'

describe('Register', () => {

    beforeEach(() => {
        render(<Register />, { wrapper: MemoryRouter });
    });

    test('it renders the login form', () => {
        let form = screen.getByRole('form')
        expect(form).toBeInTheDocument();
    });

    test('it renders the username label', () => {
        let usernameLabel = screen.getByRole('usernameLabel')
        expect(usernameLabel).toBeInTheDocument();
        expect(usernameLabel).toContainHTML("Enter Username: ");
    });
 
    test('it renders the username input', () => {
        let username = screen.getByRole('username')
        expect(username).toBeInTheDocument();
        //mock fire/user event?;
    });

    test('it renders the password label', () => {
        let passwordLabel = screen.getByRole('passwordLabel')
        expect(passwordLabel).toBeInTheDocument();
        expect(passwordLabel).toContainHTML("Enter Password: ");
    });

    test('it renders the password input', () => {
        let password = screen.getByRole('password')
        expect(password).toBeInTheDocument();
        //mock fire/user event?;
    });

    test('it renders the confirm password label', () => {
        let confirmPasswordLabel = screen.getByRole('confirmPasswordLabel')
        expect(confirmPasswordLabel).toBeInTheDocument();
        expect(confirmPasswordLabel).toContainHTML("Confirm Password: ");
    });

    test('it renders the confirm password input', () => {
        let confirmPassword = screen.getByRole('confirmPassword')
        expect(confirmPassword).toBeInTheDocument();
        //mock fire/user event?;
    });

    test('it renders the submit button', () => {
        let submit = screen.getByRole('submit')
        expect(submit).toBeInTheDocument();
        //fireEvent.click(submit);
        //expect(submit).not.toBeInTheDocument();
    });

});



