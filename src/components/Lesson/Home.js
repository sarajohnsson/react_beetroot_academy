import Button from './Button';
import { useEffect } from 'react';

export default function Home() {
    // Use brackets if you want more lines. Not able to return more than one root element, you have to wrap them with something

    function getPopular() {
        console.log('GET POPULAR');
    }

    function renderTitle() {
        if (movies.length) {
            return <h1>Results: </h1>;
        }
        return <h1>Set the movie title</h1>;
    }

    // Most popular, and easy. To do something as soon as possible
    // useEffect(getPopular); // on EVERY render
    // useEffect(getPopular, []); // only at first render, mounting
    // useEffect(getPopular, [dependencyName]); // at the first render and after dependencyName (should be a state) ir [movieName, movies] changing
    // useEffect(() => {
    //     return () => clearTimeout();
    // }, []);
}

// Lifecycle and Conditional rendering
// Different stages: Initialization -> Mounting -> Updation -> Unmounting and back to initialization
// Updation, after mounting, nothing happens until you want to update it ie movie grid is empty and will then be updated with new results
// Last stage, unmounting, when you are leaving the page

// Conditional rendering
// movies.length ? <h1>Results: </h1> : null

// {renderTItle()}

// function renderGrid(){
// grid, replace the grid with a function
// }

// For performance have all the markup in the return section
// For readability and easy to maintain create separate functions for markups and when we want to display something or modify data, will take a little more on performance
