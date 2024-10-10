import { useState } from 'react'
import './App.css'
import axios from "axios"
import DoggyHorse from './components/DoggyHorse2'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {

  const [table, setTable] = useState(<></>);

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

      setTable(<DoggyHorse data={response.data}/>);
    })
    .catch(error => {
      console.error("Error: " + error)
    })
  }

  return (
    <>
      <Stack spacing={2} direction="column"
      sx={{
        position: 'fixed', // Fix position at the top
        top: 100, // Space from the top
        left: '50%', // Optional: Space from the left
        transform: 'translateX(-50%)', // Adjust for centering
        alignItems: 'center'
        }}
        >
        <Stack spacing={2} direction="row"
        sx={{
          padding: 1, // Padding for spacing
        }}
          >
          <Button variant="contained" color="success" onClick={handleClick}>Submit</Button>
          <Button variant="contained" color="error" onClick={() => setTable(<></>)}>Reset</Button>
        </Stack>
        <div>
          {table}
        </div>
      </Stack>
    </>
  )
}

export default App
