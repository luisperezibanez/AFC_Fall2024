import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const ToDoItem = (props) => {
    let {text} = props;

    return (
      <li><h2>{text}</h2></li>
    );
  }

  const todoList = todos.map(todo =>{
    return <ToDoItem text={todo}/>
  })

  const handleSubmit = event => {
    event.preventDefault()
    const newTodos = [...todos, newTodo]
    setTodos(newTodos);
    setNewTodo("");

  }

  const handleChange = event => {
    setNewTodo(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="What needs to be done?" onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
      <div>
        <ol>
          {todoList}
        </ol>
      </div>
    </>
  )
}

export default App
