import React from 'react'

function Movies(props) {
    console.log(props)
    const Nominate = props.nominate;
    return (
        <>
        <div className="add-page">
            <div className="container">
                <div className="add-movie">
                {props.movies.map((movie, index) => 
                    <ul className="results">
                        <div className="result-card">
                            <div className="poster-wrapper">
                                <li>
                                    <img src={movie.Poster} alt="movie"></img>
                                </li>
                            </div>

                            <div className="info">
                                <div className="header">
                                    <h3 className="title">{movie.Title}</h3>
                                    <h4 className="release-date">
                                        {movie.Year.substring(0,4)}
                                    </h4>
                                </div>
                                <div className="controls">
                                    <button disabled={true} className="btn" onClick={() => props.handleNominationClick(movie)}>
                                        <Nominate/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ul>
                )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Movies