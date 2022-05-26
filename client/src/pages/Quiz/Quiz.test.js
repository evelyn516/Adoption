import { default as Quiz } from '.';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Quiz', () => {

    beforeEach(() => {
        render( <Quiz /> );
    });

    test('it renders the inputted type', () => {
        let type = screen.getByRole('title')
        expect(type).toBeInTheDocument();
        expect(type).toContainHTML("lizard");
    });

    test('it renders the Animal Snapshot', () => {
        let main = screen.getByRole('main')
        expect(main).toBeInTheDocument();
        /* expect(main).toHaveContent/.not.toBeNull?? */;
    });
});
