import React, { useContext } from 'react'
import Context from '../context'
import {Checkbox, FormControlLabel} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem(props) {
    const { removeTodo, toggleTodo } = useContext(Context)

    return (
        <div className={props.todo.completed ? 'todo-row complete' : 'todo-row'}>
             <FormControlLabel
                    label={props.todo.text}
                    control={
                        <Checkbox
                            checked={props.todo.completed}
                            onChange={() => toggleTodo(props.todo.id)}
                            color="success"
                        />
                    }
                />
            <DeleteIcon onClick={removeTodo.bind(null, props.todo.id)} className='delete-icon'/>
        </div>
    )
}

export default TodoItem