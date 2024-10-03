import { useState } from 'react';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import MovieCard from './components/MovieCard.jsx';
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { Button } from '@mui/material';
import './App.css';

function App() {

  const [movieCards, setMovieCards] = useState([])

  const baseUrl = "https://api.themoviedb.org/3"
  const apiKey = process.env.VITE_TMDB_API_TOKEN;

  const handleClick = () => {
    let route = "movie/now_playing"
    let endpoint = `${baseUrl}/${route}`

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}` 
      }
    };

    axios(options)
    .then(response => {
      console.log(response.data)
      let movieArray = response.data.results.map((m) => {
        return <MovieCard movie={m}/>
      })
      setMovieCards(movieArray)
    })
    .catch(error => {
      console.error("Error: " + error)
    })
  }

  return (
    <>
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <hr/>
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Button variant="contained" onClick={handleClick}>Now Playing</Button>
            {movieCards}
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
