import {Grid, Paper} from "@mui/material";
import React from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Context from './context';
import CRUD from './CRUD';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const store = new CRUD(todos, setTodos);

  return (
    <Context.Provider value={{store}}>
      <Grid container spacing={0}>
        <Grid item xs={12} className='item'>
          <h1>What is the plan for today?</h1>
        </Grid>
        <Grid item xs={12}>
          <Paper className='item'>
            <AddTodo/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <TodoList/>
        </Grid>
      </Grid>
    </Context.Provider>
  );
}

export default App;
