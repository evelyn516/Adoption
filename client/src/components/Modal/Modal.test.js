import { default as ContactModal } from '.';
import { screen, render, fireEvent } from '@testing-library/react';

describe('Modal', () => {
    jest.mock('axios');
    let testUsername = "Calliope"
    let testAPI = jest.fn(); /* or test.com/test/ */

    beforeEach(() => {
        axios.get.mockResolvedValue({ profileData: testData });
        render( 
        <ContactModal >
            username={testUsername}
            api={testAPI}
        </ContactModal>);

        jest.resetAllMocks()
    });

    const testData = { "name": "testShelter", "number": "5", "address": "testRd"}

    test('it renders the Contact Me button', () => {
        let button = screen.getByRole('modalButton')
        expect(button).toBeInTheDocument();
        expect(button).toContainHTML("Contact Me");
    });

    test('it calls on the API', () => {
        expect(testAPI.mock.calls.length).toBe(1)
    });

/*     test('it calls on the test API', () => {
        expect(axios.get).toHaveBeenCalledWith(expect.stringMatching(/test/));
    }); */
    
    test('it renders the Modal onClick', () => {
        let button = screen.getByRole('modalButton')
        fireEvent.click(button);
        let modal = screen.getByRole('modalBox')
        expect(modal).toBeInTheDocument();
    });
    
    test('it renders the Modal content', () => {
        let button = screen.getByRole('modalButton')
        fireEvent.click(button);
        let label1 = screen.getByRole('emailLabel')
        expect(label1).toBeInTheDocument();
        let label2 = screen.getByRole('contentLabel')
        expect(label2).toBeInTheDocument();
        let emailContent = screen.getByRole('emailContent')
        expect(emailContent).toBeInTheDocument();
        let submitButton = screen.getByRole('submitButton')
        expect(submitButton).toBeInTheDocument();
    });
    
    test('it makes a request to the api on load and returns profileData', async () => {
        let button = screen.getByRole('modalButton')
        fireEvent.click(button)
        const shelterName = await screen.getByRole('shelterName')
        expect(shelterName.textcontent).toBe(testData["name"])
        const shelterNo = await screen.getByRole('shelterNo')
        expect(shelterNo.textcontent).toBe(testData["number"])
        const shelterAdd = await screen.getByRole('shelterAdd')
        expect(shelterAdd.textcontent).toBe(testData["address"])
         })
});
