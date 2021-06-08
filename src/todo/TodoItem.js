import React, {useContext} from 'react'
import PropTypes from 'prop-types'
/* import classes from '*.module.css' */
import Context from '../context'


function TodoItem ({ todo, index, onChange }) {
    /* console.log('todo', todo) */
    const {removeTodo} = useContext(Context)
    const classes = []
    if (todo.complated){
        classes.push('done')
    }
    return (
        <li>
            <span className={classes.join(' ')}>
            <div className='kort'><input 
            type='checkbox'
            checked={todo.complated}
            onChange={() => onChange(todo.id) 
                /* , console.log(todo.id) */}/>
            <strong>{ index + 1 + '. '}</strong>
            {todo.title}
            <div className='buttons'>
            <button className='doneBtn' onClick={removeTodo.bind(null, todo.id)/* () => removeTodo(todo.id) */}><span>DONE</span></button>
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