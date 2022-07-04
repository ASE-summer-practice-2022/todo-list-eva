import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
    return props.todos.map((todo, index) => {
        return <TodoItem todo={todo} key={todo.id} index={index} />
    })
}

export default TodoList