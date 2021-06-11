import React from 'react'
import ToDoRender from './Todo/ToDoRender';
//import React, { Component, useEffect } from 'react'
//import Context from './context'
import Calendar from "./components/Calendar";

const style = {
  posistion: "relative",
  margin: "50px auto"
}

function App() {
  
  return (
    <div>
      <ToDoRender/>,

   <div className="App">
    <Calendar style={style} width="350px"
    onDayClick={(e, day) => this.onDayClick(e, day)} />
    
      </div>
    </div>
  )
}

export default App;
