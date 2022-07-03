import React, {useState} from 'react'

interface props {
    onCreate: Function
}

function AddTodo(props: props) {
    const [value, setValue] = useState('')



    //useEffect -> Хочу его

    function changeHandler(event) {
        setValue(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault();
        if (value.trim()) {
            props.onCreate(value)
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

export default AddTodo