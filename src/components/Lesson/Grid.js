export default function Grid(props) {
    return (
        <div className="home container">
            <h1>Results</h1>

            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {props.shows.map((el) => {
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
