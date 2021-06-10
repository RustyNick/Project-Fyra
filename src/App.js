import React, { Component, useEffect } from 'react'
import TodoList from './todo/TodoList'
import Context from './context'
import AddTodo from './todo/AddTodo';
import Calendar from "./components/Calendar";

const style = {
  posistion: "relative",
  margin: "50px auto"
}

function App() {

  const [todos, setTodos] = React.useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then((todos) => {
        setTodos(todos)
      });
  }, [])

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

      <div className="App">
        <Calendar style={style} width="350px"
          onDayClick={(e, day) => this.onDayClick(e, day)} />
      </div>
    </Context.Provider>
  )
}

export default App;
