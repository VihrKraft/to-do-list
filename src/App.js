import './index.css';
import NewToDoform from './components/NewToDoForm'
import ToDoList from './components/ToDoList'
import { useEffect, useState } from 'react';

function App() {
  let [newItem, setNewItem] = useState('')

  let [todos, setTodos] = useState(() => {
    let localValue = localStorage.getItem('ITEMS')
    return localValue == null ? [] : JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  const handleSubmit = (event) => {
    event.preventDefault() 
    setTodos([...todos, {
      id: crypto.randomUUID(),
      title: newItem,
      completed: false,
    }])
    setNewItem('')
  }

  const toggleTodo = (id, completed) => {
    setTodos(currentTodos => 
      currentTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: completed
          };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      (currentTodos) => {
        return currentTodos.filter((todo) => todo.id !== id)
      }
    )
  }

  return (
    <div className="App">
      <NewToDoform newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      <h1 className='header'>Todo List</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}


export default App;
