import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Movies from './Components/Movies';
import Heading from './Components/Heading';
import Search from './Components/Search';
import Nominate from './Components/Nominate';
import RemoveNomination from './Components/RemoveNomination';

function Layout() {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [searchText, setSearchText] = useState('');

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

  useEffect(()=>{
    const movieNominations = JSON.parse(localStorage.getItem('react-movie-nominations')) || [];
    setNominations(movieNominations);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-nominations', JSON.stringify(items))
  }

  const addNomination = (movie) => {
    const nominationsList = [...nominations, movie];
    setNominations(nominationsList)
    saveToLocalStorage(nominationsList)
  }

  const removeNomination = (movie) => {
    const nominationsList = nominations.filter((favorite) => favorite.imdbID !== movie.imdbID)
    setNominations(nominationsList)
    saveToLocalStorage(nominationsList)
  }

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        {/* <Heading heading="The Shoppies"/> */}
        <Search searchText={searchText} setSearchText={setSearchText}/>
      </div>
      <div className="row">
        <Movies movies={movies} nominate={Nominate} handleNominationClick={addNomination}/>
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Heading heading="Nominations"/>
      </div>
      <div className="row">
        <Movies movies={nominations} nominate={RemoveNomination} handleNominationClick={removeNomination}/>
      </div>
    </div>
  );
}

export default Layout
