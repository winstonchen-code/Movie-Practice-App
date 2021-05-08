import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
import Layout from './Layout'
import Movies from './Components/Movies';
import "./App.css";
import RemoveNomination from './Components/RemoveNomination';
import Search from './Components/Search';


function App() {
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
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Layout/>
                </Route>
                <Route exact path="/Nominated">
                    <Movies movies={nominations} nominate={RemoveNomination} handleNominationClick={removeNomination}/>
                </Route>
                <Route exact path="/Add">
                    <Search searchText={searchText} setSearchText={setSearchText}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
