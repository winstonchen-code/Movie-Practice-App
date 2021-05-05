import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Movies from './Components/Movies';


function App() {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=nba&apikey=d1684ae3"

    const response = await fetch(url);
    const responseJSON = await response.json();
    setMovies(responseJSON.Search)
  }

  useEffect(()=>{
    getMovieRequest();
  }, [])

  return (
    <div className='container-fluid movie-app'>
      <div className="row">
        <Movies movies={movies}/>
      </div>
    </div>
  );
}

export default App;
