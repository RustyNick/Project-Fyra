import React from 'react';
import TodoList from './Todo/TodoList'

function App() {
  let todos = [
    {id: 1, complated: false, title: 'måndag'},
    {id: 2, complated: false, title: 'tisdag'},
    {id: 3, complated: false, title: 'onsdag'},
    {id: 4, complated: false, title: 'torsdag'},
    {id: 5, complated: false, title: 'fredag'}
  ]

function toggleTodo(id) {
/*   console.log('todo id', id),
 */  todos = todos.map(todo=>{
    if(todo.id===id){
      todo.complated=!todo.complated
    }
    return todo
  })
}

  return (
    <div className="wrapper">
      <h1>Trello</h1>
      < TodoList todos={todos} onToggle={toggleTodo}></TodoList>
    </div>
  );
}

export default App;
