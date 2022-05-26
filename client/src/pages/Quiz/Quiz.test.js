import { default as Quiz } from '.';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Quiz', () => {
    let TestAbout = "Troy is an older gent."

    beforeEach(() => {
        render(<Quiz />);
    });

    test('it renders the questions', () => {
        let question = screen.getByRole('question')
        expect(question).toBeInTheDocument();
        //add questions usestate
        //test first question
    }); 

    test('it renders the answers', () => {
        let answer = screen.getByRole('answer')
        expect(answer).toBeInTheDocument();
        //add questions usestate
        //test first question
    }); 

    test('the submit button changes questions', () => {
        let button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
        //add questions usestate
        //test first question
    }); 

});
