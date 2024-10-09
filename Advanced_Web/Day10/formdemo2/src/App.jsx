import { useState } from 'react'
import './App.css'

function App() {

  const [personData, setPersonData] = useState({});

  const handleChange = (event) => {
    setPersonData({...personData, [event.target.name]: event.target.value});
    console.log(personData);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(personData);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="fname">
        First Name:
        <input type="text" name="fname" id="fname" onChange={handleChange}/>
      </label>
      <label htmlFor="lname">
        Last Name:
        <input type="text" name="lname" id="lname" onChange={handleChange}/>
      </label>
      <label htmlFor="age">
        Age:
        <input type="number" name="age" id="age" onChange={handleChange}/>
      </label>
      <button>Submit</button>
    </form>
    </>
  )
}

export default App
