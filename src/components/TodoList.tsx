import React, {useContext} from 'react'
import {Checkbox, FormControlLabel} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Context from "../context";

function TodoList({ todos }) {
    const { removeTodo, toggleTodo } = useContext(Context)

    return todos.map((todo) =>
        <div className={todo.completed ? 'todo-row complete' : 'todo-row'}>
            <FormControlLabel
                label={todo.text}
                control={
                    <Checkbox
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        color="success"
                    />
                }
            />
            <DeleteIcon
                onClick={removeTodo.bind(null, todo.id)}
                className='delete-icon'
            />
        </div>
    )
}

export default TodoList