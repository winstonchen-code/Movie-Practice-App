import React from 'react'

function Movies(props) {
    const Nominate = props.nominate;
    return (
        <>
            {props.movies.map((movie, index) => 
            <div className="image-container d-flex justify-content-start m-3">
                <img src={movie.Poster} alt="movie"></img>
                <div onClick={() => props.handleNominationClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                    <Nominate/>
                </div>
            </div>
            )}
        </>
    )
}

export default Movies