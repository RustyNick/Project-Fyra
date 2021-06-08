import React from 'react'
import TodoList from './todo/TodoList'
import Calendar from "./components/Calendar";

const style = {
  position: "relative",
  margin: "50px auto"
}

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <Calendar style={style} width="350px" />
      </div>
      <h1>Trello</h1>
      < TodoList></TodoList>
    </div>
  );

}

export default App;
