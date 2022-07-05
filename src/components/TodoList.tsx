import React, { useContext } from 'react'
import {Checkbox, FormControlLabel, Grid, IconButton, Paper} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Context, {TodoContextType} from "../context";
import Todo from '../models/todo'

function TodoList() {
    const { todos, removeTodo, toggleTodo } = useContext(Context) as TodoContextType

    return todos.map((todo: Todo, key: any) =>
        <Grid xs={12}>
            <Paper elevation={2} className={todo.completed ? 'todo-row complete' : 'todo-row'}>
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
                <IconButton
                    style={{marginLeft: "auto"}}
                    onClick={removeTodo.bind(null, todo.id)}
                >
                    <DeleteIcon className='delete-icon' />
                </IconButton>
            </Paper>
        </Grid>
    )
}

export default TodoList