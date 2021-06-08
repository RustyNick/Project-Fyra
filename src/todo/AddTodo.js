import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo({onCreate}){
    const [value, setValue] = useState(' ') 

    function submitHandler(event){
        event.preventDefault()
        if (value.trim()){
            onCreate(value)
            setValue('mata in text')
        }
    }
return (
    <form style={{marginTop: '0,5rem'}} onSubmit={submitHandler}>
        <input value={value} onChange={event => setValue(event.target.value)}></input>
        <button type='submit'>Lägga till ToDo</button>
    </form>
)
}
AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddTodo