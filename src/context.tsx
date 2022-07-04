import React from 'react'
import Todo from './models/todo'

export type TodoContextType = {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
};

const Context = React.createContext<TodoContextType| null>(null)

export default Context