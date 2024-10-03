import { useState, useEffect } from 'react';
import GeneratorBtn from './components/GeneratorButton.jsx';
import NumberLabel from './components/NumberLabel.jsx';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [isSeven, setIsSeven] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Effect to track changes to numberLabel
  useEffect(() => {
    if (number === 7) {
      setIsSeven(true);
      setIsVisible(false);
    } else {
      setIsSeven(false);
    }
  }, [number]); // Dependency array includes numberLabel

  return (
    <>
      <h1>Welcome to a Random Casino Game</h1>
      <NumberLabel number={number}/>
      <GeneratorBtn handleClick={(randomNumber) => setNumber(randomNumber)} visible={isVisible}/>
      <h1>{isSeven ? 'You Win!!!' : 'You are trash'}</h1>
    </>
  )
}

export default App;
