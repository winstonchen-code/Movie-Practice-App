import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Movies from './Components/Movies';


function App() {
  const [movies, setMovies] = useState([
    {
        "Title": "The Avengers",
        "Year": "2012",
        "imdbID": "tt0848228",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
        "Title": "Avengers: Endgame",
        "Year": "2019",
        "imdbID": "tt4154796",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Avengers: Age of Ultron",
        "Year": "2015",
        "imdbID": "tt2395427",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
    },
    {
        "Title": "The Avengers",
        "Year": "1998",
        "imdbID": "tt0118661",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
    },
  ]);

  const getMovieRequest = () => {
    const url = "http://www.omdbapi.com/?s=avengers&apikey=d1684ae3"
  }

  return (
    <div className='container-fluid movie-app'>
      <div className="row">
        <Movies movies={movies}/>
      </div>
    </div>
  );
}

export default App;
