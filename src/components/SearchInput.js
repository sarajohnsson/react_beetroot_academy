import { useState } from 'react'; // useState is a React hook, the most popular

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

export default function SearchInput() {
    // movieName works as a variable, can read it but not override or change it. For that we use setMovieName
    const [tvShow, setTVShow] = useState('');
    const [shows, setShows] = useState([]);

    function searchHandler(e) {
        console.log(`I want to find serie ${tvShow}`);

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
        <div>
            <div className="input-group mb-3">
                <div className="dynamicInput"></div>

                <input
                    onChange={(e) => setTVShow(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="TV Show name"
                />
                <button
                    onClick={searchHandler}
                    className="btn btn-outline-secondary"
                    type="button">
                    Search: {tvShow}
                </button>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {shows.map((el) => {
                        return (
                            <div className="col" key={el.id || el.name}>
                                <div className="card shadow-sm">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                                        className="bd-placeholder-img card-img-top"
                                        alt="Movie Poster"
                                    />
                                    <div className="card-body">
                                        <h2>{el.name}</h2>
                                        <p className="card-text">
                                            {el.overview}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
