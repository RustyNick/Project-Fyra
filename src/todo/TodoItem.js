import React from 'react'
import PropTypes from 'prop-types'


function TodoItem ({ todo, index, onChange }) {
    console.log('todo', todo)
    return (
        <li>
            <span><div className='kort'>
            <strong>{ index + 1 + '. '}</strong>
            {todo.title}
            <input type='checkbox' onChange={() => onChange(todo.id) /* , console.log(todo.id) */}/>
            <div className='buttons'>
            <button className='up'>upp</button>
            <button className='down'>ner</button>
            <button className='down'>&times;</button>
            </div>
            </div>
            
            </span>
        </li>  
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
export default TodoItem