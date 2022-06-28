import React from 'react'
import TodoList from './todo/TodoList'
import Context from './context'
import AddTodo from './todo/AddTodo'

function App() {
    const [todos, setTodos] = React.useState([])

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    function addTodo(text) {
        // todos.push({
        //     text: text,
        //     id: Date.now(),
        //     completed: false
        // })
        // setTodos(todos);
        
        setTodos(todos.concat([{
            text: text,
            id: Date.now(),
            completed: false
        }]))
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className='todo-app'>
                <h1>What's the plan for today?</h1>
                <AddTodo onCreate={addTodo}/>
                <TodoList 
                    todos={todos}
                    // onToggle={(e) => toggleTodo(e)} в чем разница
                    onToggle={toggleTodo}
                  />
            </div>
        </Context.Provider>
    );
}

export default App;
