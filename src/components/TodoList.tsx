import React from 'react'
import TodoItem from './TodoItem'

interface todo {
    id: number;
    text: string;
    completed: boolean
}

interface props {
    todos: Array<todo>;
    onToggle: Function;
}

function TodoList(props: props) {
    return props.todos.map((todo, index) => {
        return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle} />
    })
}

export default TodoList