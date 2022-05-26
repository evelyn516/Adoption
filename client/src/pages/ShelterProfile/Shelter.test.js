import { default as Profile } from '.';
import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter, BrowserRouter, Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import '@testing-library/jest-dom'

describe('Profile', () => {

    beforeEach(() => {
        render(<Profile />, { wrapper: MemoryRouter });
    });

    test('it renders the title', () => {
        let profile = screen.getByRole('profile')
        expect(profile).toBeInTheDocument();
    });

    test('it renders the organisation name', () => {
        let orgName = screen.getByRole('orgName')
        expect(orgName).toBeInTheDocument();
        expect(orgName).toContainHTML("Your Organisation Name: ");
    });
 
    test('it renders the organisation number', () => {
        let orgNo = screen.getByRole('orgNo')
        expect(orgNo).toBeInTheDocument();
        expect(orgNo).toContainHTML("Your Organisation Number: ");
    });

    test('it renders the Shelter Address', () => {
        let sheltAdd = screen.getByRole('sheltAdd')
        expect(sheltAdd).toBeInTheDocument();
        expect(sheltAdd).toContainHTML("Your Shelter's Address: ");
    });

    test('it renders the shelter Email', () => {
        let sheltEmail = screen.getByRole('sheltEmail')
        expect(sheltEmail).toBeInTheDocument();
        expect(sheltAdd).toContainHTML("Your Shelter's Email: ");
    });

    test('it renders the form', () => {
        let form = screen.getByRole('form')
        expect(form).toBeInTheDocument();
    });

    test('it renders the organisation name input', () => {
        let orgNameLabel = screen.getByRole('orgNameLabel')
        expect(orgNameLabel).toBeInTheDocument();
        expect(orgNameLabel).toContainHTML("Organisation Name");
        let orgNameInput = screen.getByRole('orgNameInput')
        expect(orgNameInput).toBeInTheDocument();
    });

    test('it renders the number input', () => {
        let numberLabel = screen.getByRole('numberLabel')
        expect(numberLabel).toBeInTheDocument();
        expect(numberLabel).toContainHTML("Phone Number");
        let numberInput = screen.getByRole('numberInput')
        expect(numberInput).toBeInTheDocument();
    });

    test('it renders the SHelter Address input', () => {
        let addressLabel = screen.getByRole('addressLabel')
        expect(addressLabel).toBeInTheDocument();
        expect(addressLabel).toContainHTML("Shelter's Address");
        let addressInput = screen.getByRole('addressInput')
        expect(addressInput).toBeInTheDocument();
    });

    test('it renders the confirm Shelter Email input', () => {
        let emailAddressLabel = screen.getByRole('emailAddressLabel')
        expect(emailAddressLabel).toBeInTheDocument();
        expect(emailAddressLabel).toContainHTML("Shelter's Email");
        let emailAddressInput = screen.getByRole('emailAddressInput')
        expect(emailAddressInput).toBeInTheDocument();
    });

    test('it renders the submit button', () => {
        let submit = screen.getByRole('submit')
        expect(submit).toBeInTheDocument();
        //fireEvent.click(submit);
        //expect(submit).not.toBeInTheDocument();
    });

});



