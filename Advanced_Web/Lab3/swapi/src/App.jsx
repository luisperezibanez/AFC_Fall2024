import { useState } from 'react'
import './App.css'
import axios from "axios"

function App() {

  const baseUrl = "https://swapi.dev/api/"

  const handleClick = () => {
    let route = "people"
    let endpoint = `${baseUrl}/${route}`

    const options = {
      method: 'GET',
      url: endpoint,
      headers: {
        accept: 'application/json'
      }
    };

    axios(options)
    .then(response => {
      console.log(response.data)
      // let movieArray = response.data.results.map((m) => {
      //   return <MovieCard movie={m}/>
      // })
      //setMovieCards(movieArray)
    })
    .catch(error => {
      console.error("Error: " + error)
    })
  }

  return (
    <>
      <button onClick={handleClick}>Test</button>
    </>
  )
}

export default App
