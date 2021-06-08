import React, { useEffect } from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo';

function App() {
  const localStorageKey = 'listA'
  const prevStored = JSON.parse(window.localStorage.getItem(localStorageKey))
  const [todos, setTodos] = React.useState(prevStored || [])

  useEffect(() => {
    // If todos has data don't do anything
    if(todos.length) return;
    
    // if empty fetch from backend
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then((todos) => {
        setTodos(todos)
      });
  }, [])

  // Effect to save to localstorage on change
  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.complated = !todo.complated
        }
        return todo
      })
    )
  }
  function removeTodo(id) {
    console.log('ta bort todo från listan', id)
    setTodos(todos.filter(todo => todo.id !== id))
  }
  function addTodo(title) {
    console.log('lägga till en Todo', title)
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      complated: false
    }]))
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="main">
        <div className="list">
          <h5>Lista A</h5>
          <div className="wrapper">
            {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>Ingen att gora</p>}

            {<AddTodo onCreate={addTodo} />}
          </div>
          <button className="newCard">Lägga till nytt kort</button>
          <button className="removeCard">Ta bort kort</button>
        </div>
        <div className='listCantainer'>
          <button className="newList">Skapa ny lista</button>
          <button className="removeList">Ta bort sista lista</button>
        </div>
      </div>
    </Context.Provider>
  )
}

export default App;
