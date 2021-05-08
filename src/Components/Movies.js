import React from 'react'

function Movies(props) {
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
                                    <div onClick={() => props.handleNominationClick(movie)}>
                                        <Nominate/>
                                    </div>
                                </li>
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