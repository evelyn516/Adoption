import { default as Matchability } from '.';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Matchability', () => {

/*     beforeEach(() => {
        render(
        <Matchability>
            {score}
        </Matchability>);
    }); */

    test('it generates the percentage of 100% for 8', () => {
        render(
            <Matchability>
                {8}
            </Matchability>);

        let percentage = screen.getByRole('percent')
        expect(percentage).toBeInTheDocument();
        expect(percentage).toContainHTML("100%");
    });

    test('it generates the percentage of 50% for 4', () => {
        let score = 4
        render(
            <Matchability>
                {score}
            </Matchability>);

        let percentage = screen.getByRole('percent')
        expect(percentage).toBeInTheDocument();
        expect(percentage).toContainHTML("50%");
    });

    test('it generates the percentage of 0% for 0', () => {
        render(
            <Matchability>
                {0}
            </Matchability>);

        let percentage = screen.getByRole('percent')
        expect(percentage).toBeInTheDocument();
        expect(percentage).toContainHTML("0%");
    });
});
