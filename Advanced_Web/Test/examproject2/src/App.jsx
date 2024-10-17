import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (event) => {
    switch (event.target.innerHTML) {
      case "+":
        if(count < 3)
          setCount(count + 1)
        break;
      default:
        if(count > 0)
          setCount(count - 1)
        break;
    }
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>-</button>
      <button onClick={handleClick}>+</button>
    </>
  )
}

export default App
