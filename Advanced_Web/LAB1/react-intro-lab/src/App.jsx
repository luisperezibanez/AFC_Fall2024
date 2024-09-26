import { useState } from 'react';
import Greeting from './components/Greeting.jsx';
import UserCard from './components/UserCard.jsx';
import CardContainer from './components/CardContainer.jsx';
import { sortArrayByAge } from './helper.js';

function App() {
  let users = [{name:"Bob", age:30}, {name:"Charlie", age:35}, {name:"Alice", age:25}];
 
  let userCards = sortArrayByAge(users).map(user => {
    let {name, age} = user;
    return <UserCard key={name+age} name={name} age={age}/>
  });

  return (
    <>
    <div>
      <Greeting name="Luis"/>
    </div>
    <CardContainer>
      {userCards}
    </CardContainer>
    </>
  );
}

export default App;
