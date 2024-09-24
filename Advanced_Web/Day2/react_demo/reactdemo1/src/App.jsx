import Child from './components/Child';

const App = () => {
  let children = ["Kid 1", "Kid 2", "Kid 3"];
  children.sort((a, b) => b.localeCompare(a));
  let newArray = children.map(kid => {
    return <Child fname={kid}/>
  })
  return (
    <>
      <h1>My first React Component</h1>
      <h2>My Kids are</h2>
      {newArray}
    </>
  );
};

export default App;