import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList'
import Context from './context'
import AddTodo from './components/AddTodo'
import Todo from './models/todo'

function App() {
    const [todos, setTodos] = React.useState<Todo[]>([])

    function toggleTodo(id: string) {
        setTodos(
            todos.map((todo) => {
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
        const newTodo : Todo = {
            text: text,
            id: uuidv4(),
            completed: false
        }
        setTodos([...todos, newTodo])
    }

    return (
        <Context.Provider value={{ todos, removeTodo, addTodo, toggleTodo }}>
            <div className='todo-app'>
                <h1>What's the plan for today?</h1>
                <AddTodo />
                <TodoList />
            </div>
        </Context.Provider>
    );
}

export default App;
