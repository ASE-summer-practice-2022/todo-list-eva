import React, {ChangeEvent, useContext, useState} from 'react'
import {Button, Input} from "@mui/material";
import Context, {TodoContextType} from "../context";

function AddTodo() {
    const [value, setValue] = useState('')

    const { addTodo } = useContext(Context) as TodoContextType

    //useEffect -> Хочу его

    function changeHandler(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    function submitHandler(event: any) {
        event.preventDefault();
        if (value.trim()) {
            addTodo(value)
            setValue('')
        }
    }

    return (
            <form onSubmit={submitHandler} style={{ display: "flex" }}>
                <Input
                    value={value}
                    placeholder="Enter your task"
                    onChange={changeHandler}
                    color="success"
                    style={{ width: "90%" }}

                />
                <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    style={{ width: "10%"}}
                >
                    Add
                </Button>
            </form>
    )
}

export default AddTodo