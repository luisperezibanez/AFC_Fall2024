import { useState } from 'react'
//import './App.css'
import Navbar from './components/Navbar'
import axios from 'axios';
import MovieCard from './components/MovieCard'

function App() {

  const [movieCards, setMovieCards] = useState([])

  const handleSearchChange = (event) => {
    const value = event.target.value;
    console.log('Current Search Value:', value); // Extract value on every key press

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {query: value, include_adult: 'false', language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmJlZjA1NGEyMmNmYmRmZmEwMGVhMjE4NjMwZjQzNSIsIm5iZiI6MTcyODMxNDExMC44Mzc4MTksInN1YiI6IjY2ZmQ1NzZmYjNmMTI4MWQ3YzU5NjNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q-DZ5VzzqFROMcJzAQae1kh6oviC8pnTzCmQ86fDG70'
      }
    };
  
    axios
    .request(options)
    .then(response => {
      console.log(response.data);
      let movieArray = response.data.results.map((m) => {
        return <MovieCard movie={m}/>
      })
      setMovieCards(movieArray)
    })
    .catch(function (error) {
      console.error(error);
    });

  };

  return (
    <>
     <Navbar handleChange={handleSearchChange}/>
     {movieCards}
    </>
  )
}

export default App
