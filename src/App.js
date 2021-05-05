import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Movies from './Components/Movies';
import Heading from './Components/Heading';
import Search from './Components/Search';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('')

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=d1684ae3"

    const response = await fetch(url);
    const responseJSON = await response.json();
    setMovies(responseJSON.Search)
  }

  useEffect(()=>{
    getMovieRequest();
  }, [])

  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <Heading heading="The Shoppies"/>
        <Search />
      </div>
      <div className="row">
        <Movies movies={movies}/>
      </div>
    </div>
  );
}

export default App;
