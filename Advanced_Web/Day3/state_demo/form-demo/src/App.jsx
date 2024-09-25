import { useState } from 'react';
import './App.css';
import { personObj } from './helper';

function App() {
  // const [fname, setFname] = useState("");
  // const [age, setAge] = useState(0);
  // const [pw, setPw] = useState("");
  
  const [person, setPerson] = useState(personObj);


  return (
    <form action="/getdata" method="get">
      <label>
        First Name:
        <input type="text" name="" id="" />
      </label>
      <label>
        Age:
        <input type="number" />
      </label>
      <label>
        Password:
        <input type="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
