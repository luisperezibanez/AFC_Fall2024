import { useState, useEffect } from 'react'
import './App.css'
import Dice from './components/Dice'
import { randomDice } from './helper.js'

/*
  Order os set states is as follows:
  User clicks Roll
  Roll trigers setDiceNumbers -> generates all random numbers
  useEffect of diceNumbers trigers updateDice -> maps Dice to diceNumbers
  useEffect of diceElements trigers setSum
*/

function App() {

  let [diceNumbers, setDiceNumbers] = useState([1]); // An array of numbers that range from 1 to 6
  let [diceElements, setDiceElements] = useState([]);
  let [diceCount, setDiceCount] = useState(1); // How many dice should be displayed on the screen
  let [doShake, setDoShake] = useState(false); // Added this to trigger a state change regardles if number generated is the same as the previous number
  let [shakeFlag, setShakeFlag] = useState(false); // Added this to avoid a shake animation when addidng or subtracting dice
  let [sum, setSum] = useState(1);

  // When Roll btn is clicked
  // a new random number will generate for each dice on the screen
  const handleClick = () => {
    setDoShake(!doShake)
    let tempArray = []
    for(let i = 0; i < diceNumbers.length; i++){
      tempArray[i] = randomDice();
    }
    setDiceNumbers(tempArray);
  }

  // Add another dice
  const handleAddClick = () => {
    setDiceCount(diceCount + 1);
    let tempArray = diceNumbers;
    diceNumbers.push(1)
    setDiceNumbers(tempArray);

    tempArray = diceElements
    
  }

  // Subtract a dice if total is grater than 1
  const handleSubClick = () => {
    if(diceCount > 1){
      setDiceCount(diceCount - 1);

      let tempArray = diceNumbers
      tempArray.pop()
      setDiceNumbers(tempArray)
    }
  }

  // when diceCount updates call updateDice
  useEffect(() => {
    console.log(`Dice count is: ${diceCount}`);
    updateDice()
  }, [diceCount])

  // when diceNumbers change updateDice
  // dice number changes when roll is clicked
  useEffect(() => {
    console.log(`The number should be: ${diceNumbers}`);
    updateDice()
  }, [diceNumbers])

  // map Dice to the diceNumbers Array
  const updateDice = () => {
    let id = 0
    let tempArray = diceNumbers.map((n) => {
      return <Dice key={id} value={diceNumbers[id++]} doShake={doShake}/>
    })
    setDiceElements(tempArray)
  }

  useEffect(() => {
    let temp = 0;
    for(let item of diceNumbers)
      temp += item
    setSum(temp);
  }, [diceElements])

  return (
    <>
    <h1>Dice Roll Lab</h1>
      <div className="game-container flex-container">
        <div className="flex-container dice-container">
          {diceElements}
        </div>
        <div className="dice-controls flex-container">
          <button onClick={handleSubClick}>-</button>
            Number of dice
          <button onClick={handleAddClick}>+</button>
        </div>
        <h1>Roll Equals {sum}</h1>
        <button onClick={handleClick}>Roll</button>
      </div>
    </>
  )
}

export default App
