import { default as Login } from '.';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import store from "../../redux/store";

/* probably redux */

describe('Login', () => {

    beforeEach(() => {
        render(<Provider store={store}><Login /></Provider>);
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

    test('it renders the submit button', () => {
        let submit = screen.getByRole('submit')
        expect(submit).toBeInTheDocument();
        //fireEvent.click(submit);
        //expect(submit).not.toBeInTheDocument();
    });

    
});
