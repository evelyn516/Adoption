import { default as Collapsible } from '.';
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react';

describe('Animal Snapshot', () => {
    let TestAbout = "Troy is an older gent."

    beforeEach(() => {
        render(
        <Collapsible open >
            {TestAbout}
        </Collapsible>);
    });

    test('it renders the see more button and changed content onClick', () => {
        let seeMoreButton = screen.getByRole('seeMore')
        expect(seeMoreButton).toBeInTheDocument();
        expect(seeMoreButton).toContainHTML("See Less");
        fireEvent.click(seeMoreButton);
        expect(seeMoreButton).toContainHTML("See More");
    });

    test('about content is rendered shown and on click is hidden', () => {
        let seeMoreButton = screen.getByRole('seeMore')
        let aboutContent = screen.getByRole('about')
        expect(aboutContent).toBeInTheDocument();
        expect(aboutContent).toBeVisible();
        fireEvent.click(seeMoreButton);
        expect(aboutContent).not.toBeInTheDocument();
    });

});
