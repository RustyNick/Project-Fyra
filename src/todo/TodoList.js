import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

 function TodoList (props) {
    return (
        <ul style={styles.ul}>
                {props.todos.map((todo, index) => {
                return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
                })}
        </ul>        
    )
}
/* function myfunc () {
    return (
        <div>
<p>det är main div</p>
        </div>
        )
    } */

    const myelement = React.createElement(
    'div',
    {id: "header", className: "header"}, 
    'Child element...'
    )

console.log (myelement)

/* ReactDOM.render (
    myelement, 
    document.querySelector('#app')
) */

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
export default TodoList
