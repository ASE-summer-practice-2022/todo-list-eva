import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo({ onCreate }) {
    const [value, setValue] = useState('')



    //useEffect -> Хочу его

    function changeHandler(event) {
        setValue(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault();
        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <div>
            <form className='todo-form' onSubmit={submitHandler}>
                <input
                    type='text'
                    placeholder='Enter a task'
                    value={value}
                    className='todo-input'
                    onChange={changeHandler}
                />
                <button className='todo-button'>Add</button>
            </form>
        </div>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo