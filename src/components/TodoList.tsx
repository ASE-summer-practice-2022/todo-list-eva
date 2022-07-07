import DeleteIcon from "@mui/icons-material/Delete";
import {Checkbox, FormControlLabel, Grid, IconButton, Paper} from "@mui/material";
import React, {useContext} from 'react';

import Context, {ContextType} from "../context";
import Todo from '../models/todo';

function TodoList() {
  const {store} = useContext(Context) as ContextType;

  return <div>
    {
      store.todos.map((todo: Todo) =>
        <Grid key={todo.id}>
          <Paper elevation={2} className={todo.completed ? 'todo-row complete' : 'todo-row'}>
            <FormControlLabel
              label={todo.text}
              control={
                <Checkbox
                  checked={todo.completed}
                  onChange={() => store.toggleTodo(todo.id)}
                  color="success"
                />
              }
            />
            <IconButton
              style={{marginLeft: "auto"}}
              onClick={() => store.removeTodo(todo.id)}
            >
              <DeleteIcon className='delete-icon'/>
            </IconButton>
          </Paper>
        </Grid>
      )
    }
  </div>;
}

export default TodoList;
