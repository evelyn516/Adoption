import { default as ContactModal } from '.';
import { screen, render, fireEvent } from '@testing-library/react';
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

describe('Modal', () => {
    let testUsername = "calliope"
    let testAPI = jest.fn(); 

    jest.mock("./testAPI/testUsername", () => {
        return {
          convert: jest.fn().mockImplementation(() => {
            return 1.42;
          }),
        };
      });

    beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify({ profileData: testData })); 
        render( 
        <ContactModal >
            {testUsername}
            {testAPI} 
        </ContactModal>);

        fetch.mockClear();
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

     test('it calls on the test API', () => {
        expect(axios.get).toHaveBeenCalledWith(expect.stringMatching(/testUsername/));
    }); 
    
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
