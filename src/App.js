import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Movies from './Components/Movies';
import Heading from './Components/Heading';
import Search from './Components/Search';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('')

  const getMovieRequest = async (searchText) => {
    const url = `http://www.omdbapi.com/?s=${searchText}&apikey=d1684ae3`

    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search)
    }
  }

  useEffect(()=>{
    getMovieRequest(searchText);
  }, [searchText])

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Heading heading="The Shoppies"/>
        <Search searchText={searchText} setSearchText={setSearchText}/>
      </div>
      <div className="row">
        <Movies movies={movies}/>
      </div>
    </div>
  );
}

export default App;
