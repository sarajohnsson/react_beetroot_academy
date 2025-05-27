// import logo from './logo.svg';
import { useState } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/BlogHomework/layouts/DefaultLayout';
import BlogPage from './components/BlogHomework/pages/Home/BlogPage';
import SingleBlogPage from './components/BlogHomework/pages/SingleBlog/SingleBlogPage';

// import MovieDatabase from './components/Lesson/MovieDatabase';
// import Home from './components/Home';
import TipsCalculator from './components/TipsCalcHomework/TipsCalculator';
// import Gallery from './components/ClassCompHomework/Gallery';
// import OldLightGallery from './components/ClassCompHomework/OldLightGallery';
// import ObjectOrientedData from './components/PetProjects/ObjectOrientedData';

function App() {
    // const [page, setPage] = useState('home');

    // function renderProperPage() {
    //     if (page === 'home') {
    //         return <Home />;
    //     }

    //     if (page === 'game') {
    //         return <Game />;
    //     }
    // }

    return (
        // These are not common HTML tags, but JSX elements.
        // Tags are the same except for class in JSX is className
        // If you have picture in local file you need to import each and everyone of them as you are not able to put them directly in the HTML like code
        <div className="App">
            {/* <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<BlogPage />} />
                    <Route
                        path="/singleblogpage/:id"
                        element={<SingleBlogPage />}
                    />
                </Route>
            </Routes> */}
            {/* <MovieDatabase /> */}
            <TipsCalculator />
            {/* <Gallery /> */}
            {/* <OldLightGallery /> */}
            {/* <ObjectOrientedData /> */}
            {/* <div className="App">{renderProperPage()}</div>; */}
        </div>
    );
}

export default App;

// Divide the design into components ie slider is a separate component, logo, navigation, socials etc
// Components includes three parts, structure like html, styling, and some JS feature. If a component doesn't have JS don't create it as a component but as a normal markup
// Difference between simple markup and component, component has a separate JS file attached to it

// Static part, always in the url
// Non static parts that we as a developer don't know what it will be.
