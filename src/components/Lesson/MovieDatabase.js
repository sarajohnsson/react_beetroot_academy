import { useState } from 'react'; // useState is a React hook, the most popular
import 'bootstrap/dist/css/bootstrap.css';
import SearchInput from '../Lesson/SearchInput';
import Grid from '../Lesson/Grid';

const KEY =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTE3YTc4YjRhNDU2ODMyOTYyMDAwOGU1ZmVkY2UwMiIsIm5iZiI6MTcxNjYzNzQ4MC4xMTYsInN1YiI6IjY2NTFjZjI4YWNmYzEwNzIwMTI2ZjBjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.58Djt1orwNIFd7TwBjyXEx-_PbBgxFzkI-1zsn29K7w';
const BASE_SEARCH_URL = 'https://api.themoviedb.org/3/search/tv';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${KEY}`,
    },
};

export default function MovieDatabase() {
    const [shows, setShows] = useState([]);
    const [tvShow, setTVShow] = useState('');

    function searchHandler(e) {
        fetch(BASE_SEARCH_URL + '?query=' + tvShow, options)
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                // console.log(resp.results);
                setShows(resp.results);
            });
    }

    return (
        <div className="container">
            <h1>TV DB</h1>

            <SearchInput
                onChangeFunction={setTVShow}
                onSearchFunction={searchHandler}
            />
            <Grid shows={shows} />
        </div>
    );
}
