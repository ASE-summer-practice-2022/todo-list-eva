import React, { Fragment } from 'react'
import TodoList from './components/TodoList'
import Context from './context'
import AddTodo from './components/AddTodo'
import Todo from './models/todo'
import { Paper, Grid } from "@mui/material";
import CRUD from './CRUD'

function App() {
    const [todos, setTodos] = React.useState<Todo[]>([])

    let myCRUD = new CRUD(todos, setTodos)

    return (
        <Context.Provider value={{ myCRUD }}>
            <Fragment>
                <Grid container spacing={0}>
                    <Grid item xs={12} className='paper'>
                        <h1>What's the plan for today?</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className='paper'>
                            <AddTodo />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <TodoList />
                    </Grid>
                </Grid>
            </Fragment>
        </Context.Provider>
    );
}

export default App;
