import React from 'react'
import PropTypes from 'prop-types'


function TodoItem ({ todo, index, onChange }) {
    console.log('todo', todo)
    return (
        <li>
            <span><div className='kort'>
            <input type='checkbox' onChange={() => onChange(todo.id) /* , console.log(todo.id) */}/>
            <strong>{ index + 1 + '. '}</strong>
            {todo.title}
            <div className='buttons'>
            <button className='done'>&times;<span>DONE</span></button>
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