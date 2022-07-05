import React, {useContext} from 'react'
import {Checkbox, FormControlLabel} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Context, {TodoContextType} from "../context";
import Todo from '../models/todo'

function TodoList() {
    const { todos, removeTodo, toggleTodo } = useContext(Context) as TodoContextType

    return todos.map((todo: Todo) =>
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