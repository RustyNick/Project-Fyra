import React from 'react';
import TodoList from './Todo/TodoList'

function App() {
  let todos = [
    {id: 1, complated: false, title: 'handla'},
    {id: 2, complated: false, title: 'lämna böker'},
    {id: 3, complated: false, title: 'klippa gräs'},
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
    <div className="main">
      <div className="list">
          <h5>Lista A</h5>
        <div className="wrapper">
          < TodoList todos={todos} onToggle={toggleTodo}></TodoList>
        </div>
        <button className="newCard">Lägga till nytt kort</button>
      </div>
        <button className="newList">Skapa ny lista</button>
    </div>
  );
}

export default App;
