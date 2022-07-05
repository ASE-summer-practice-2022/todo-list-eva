import React, { Fragment } from 'react'
import TodoList from './components/TodoList'
import Context from './context'
import AddTodo from './components/AddTodo'
import Todo from './models/todo'
import { Paper, Grid } from "@mui/material";;

function App() {
    const [todos, setTodos] = React.useState<Todo[]>([])

    function toggleTodo(id: string) {
        setTodos(
            todos.map((todo: Todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function removeTodo(id: string) {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    function addTodo(text: string) {
        const newTodo = new Todo(text);
        setTodos([...todos, newTodo])
    }

    return (
        <Context.Provider value={{ todos, removeTodo, addTodo, toggleTodo }}>
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
