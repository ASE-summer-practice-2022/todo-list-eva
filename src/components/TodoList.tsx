import React, { useContext } from 'react'
import {Checkbox, FormControlLabel, Grid, IconButton, Paper} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Context, {TodoContextType} from "../context";
import Todo from '../models/todo'

function TodoList() {
    const { myCRUD } = useContext(Context) as TodoContextType

    return <div>
        {
            myCRUD.todos.map((todo: Todo) =>
                <Grid xs={12}>
                    <Paper elevation={2} className={todo.completed ? 'todo-row complete' : 'todo-row'}>
                        <FormControlLabel
                            label={todo.text}
                            control={
                                <Checkbox
                                    checked={todo.completed}
                                    onChange={() => myCRUD.toggleTodo(todo.id)}
                                    color="success"
                                />
                            }
                        />
                        <IconButton
                            style={{marginLeft: "auto"}}
                            onClick={() => myCRUD.removeTodo(todo.id)}
                        >
                            <DeleteIcon className='delete-icon' />
                        </IconButton>
                    </Paper>
                </Grid>
            )
        }
    </div>
}

export default TodoList