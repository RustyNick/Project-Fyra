import React, { Component } from 'react'
import TodoList from './todo/TodoList'
import Calendar from "./components/Calendar";

const style = {
  position: "relative",
  margin: "50px auto"
}



function App() {
  let todos = [
    { id: 1, complated: false, title: 'måndag' },
    { id: 2, complated: false, title: 'tisdag' },
    { id: 3, complated: false, title: 'onsdag' },
    { id: 4, complated: false, title: 'torsdag' },
    { id: 5, complated: false, title: 'fredag' }
  ]

  function toggleTodo(id) {
    /*   console.log('todo id', id),*/
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.complated = !todo.complated
      }
      return todo
    })
  }

  return (
    <div className="wrapper">
      <h1>Trello</h1>
      < TodoList todos={todos} onToggle={toggleTodo}></TodoList>
      <div className="App">
        <Calendar style={style} width="350px"
          onDayClick={(e, day) => this.onDayClick(e, day)} />
      </div>
    </div>
  );
}

export default App;

