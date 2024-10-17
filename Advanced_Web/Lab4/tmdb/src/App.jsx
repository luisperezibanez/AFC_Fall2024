import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Results from './components/Results'
import './App.css'

function App() {
  
  const [movieCards, setMovieCards] = useState([])
  const [searchValue, setSearchValue] = useState([])
  

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
    console.log('Current Search Value:', event.target.value); // Extract value on every key press
  };

  return (
    <>
      <Router>
        <div className="App">
        <div className="container">
          <Navbar handleChange={handleSearchChange}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/results" element={<Results searchValue={searchValue}/>}/>
          </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
