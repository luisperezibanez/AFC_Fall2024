import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [backgroundColor, setBackGroundColor] = useState("")

  const handleClick = (event) => {
    let selectedColor = (event.target.innerHTML).toLowerCase();

    if(selectedColor == "default")
      selectedColor = "#242424"

    setBackGroundColor(selectedColor);

  }

  const handleChange = (event) => {
    let selectedColor = (event.target.value).toLowerCase();

    setBackGroundColor(selectedColor);
  }

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <>
      <p onClick={handleClick}>Red</p>
      <p onClick={handleClick}>Yellow</p>
      <p onClick={handleClick}>Green</p>
      <p onClick={handleClick}>Default</p>
      <input type="text" placeHolder="Enter any color" onChange={handleChange}/>
    </>
  )
}

export default App
