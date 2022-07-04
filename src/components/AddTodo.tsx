import React, {useContext, useState} from 'react'
import {TextField} from "@mui/material";
import Context from "../context";

interface props {
    onCreate: Function
}

function AddTodo(props: props) {
    const [value, setValue] = useState('')

    const { addTodo } = useContext(Context)

    //useEffect -> Хочу его

    function changeHandler(event) {
        setValue(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault();
        if (value.trim()) {
            addTodo(value)
            setValue('')
        }
    }

    return (
        <div>
            <form className='todo-form' onSubmit={submitHandler}>
                <TextField
                    id="outlined-task"
                    label="Enter a task"
                    color="success"
                    value={value}
                    onChange={changeHandler}
                />
            </form>
        </div>
    )
}

export default AddTodo