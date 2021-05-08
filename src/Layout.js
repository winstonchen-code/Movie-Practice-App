import React, { useEffect, useState } from 'react'
import './App.css';
import Movies from './Components/Movies';
import Search from './Components/Search';
import Nominate from './Components/Nominate';
import RemoveNomination from './Components/RemoveNomination';
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: 5fr 1fr;
`
const ColumnLeft = styled.div`
    order: ${({reverse}) => (reverse? '2' : '1')};
`

const ColumnRight = styled.div`
    padding: 2rem;
    order: ${({reverse}) => (reverse? '1' : '2')};
    display: relative;
    justify-content: center;
    background-color: white;
`

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
    <>
      <Container>
        <ColumnLeft>
          <div>
            <Search searchText={searchText} setSearchText={setSearchText}/>
          </div>
          <div>
            <Movies movies={movies} nominate={Nominate} handleNominationClick={addNomination}/>
          </div>
        </ColumnLeft>
        <ColumnRight>
          <div>
            <Movies movies={nominations} nominate={RemoveNomination} handleNominationClick={removeNomination}/>
          </div>
        </ColumnRight>
      </Container>
    </>
  );
}

export default Layout
