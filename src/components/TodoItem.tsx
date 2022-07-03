import React, { useContext } from 'react'
import Context from '../context'
import { RiCloseCircleLine } from 'react-icons/ri'

interface todo {
    id: number;
    text: string;
    completed: boolean
}

interface props {
    todo: todo;
    index: number;
    onChange: Function
}

function TodoItem(props: props) {
    const { removeTodo } = useContext(Context)

    return (
        <div className={props.todo.completed ? 'todo-row complete' : 'todo-row'}>
            <div>
                <input
                    type="checkbox"
                    checked={props.todo.completed}
                    onChange={() => props.onChange(props.todo.id)}
                    className='checkbox'
                />
                {props.todo.text}
            </div>

            <RiCloseCircleLine
                onClick={removeTodo.bind(null, props.todo.id)}
                className='delete-icon'
            />

        </div>
    )
}

export default TodoItem