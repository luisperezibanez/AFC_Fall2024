import { useState, useEffect } from 'react'
import axios from "axios"
import { DogCard } from "./components/DogCard.jsx"
import './App.css'

// MUI components
import {Button} from '@mui/material';

function App() {
  // consuming an API
  // http reuest
  // click a button
  // get a random dog image

  // fetch(endpoint)
  // .then(response)
  // .then(parseDate)
  // .catch(error)

  // axios.method(endpoint)
  // .then(response)
  // .catch(error)

  const [dogImage, setDogImage] = useState("");
  const endpoint = "https://dog.ceo/api/breeds/image/random"

  const handleClick = () => {
    console.log("handleClick");
    axios
      .get(endpoint)
      .then(response => {
        console.log(`Response: ${JSON.stringify(response)}`)
        setDogImage(response.data.message)
      })
      .catch(error => {
        console.error(`Error: ${error.message}`)
      })
  }

  useEffect(() => {
    axios.get(endpoint)
    .then(response => {
      console.log(`Response: ${response}`)
      setDogImage(response.data.message)
    })
    .catch(error => {
      console.error(`Error: ${error.message}`)
    })
  }, [])

  return (
    <>
      <h1>Random Dog Image</h1>
      <Button size="large" variant="contained" onClick={handleClick} sx={{marginBottom:2}}>Click Me</Button>
      <DogCard image={dogImage}/>
    </>
  )
}

export default App
