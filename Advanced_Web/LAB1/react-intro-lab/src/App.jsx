import { useState } from 'react';
import Greeting from './components/Greeting.jsx';
import UserCard from './components/UserCard.jsx';
import CardContainer from './components/CardContainer.jsx';

function App() {
  

  return (
    <>
    <div>
      <Greeting name="Luis"/>
    </div>
    <CardContainer>
      <UserCard name="Bob" age="30"/>
      <UserCard name="Charlie" age="35"/>
      <UserCard name="Alice" age="25"/>
    </CardContainer>
    </>
  );
}

export default App;
