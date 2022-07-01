import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import { RiCloseCircleLine } from 'react-icons/ri'


function TodoItem({ todo, onChange }) {
    const { removeTodo } = useContext(Context)

    return (
        <div className={todo.completed ? 'todo-row complete' : 'todo-row'}>
            <div>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                    className='checkbox'
                />
                {todo.text}
            </div>

            <RiCloseCircleLine
                onClick={removeTodo.bind(null, todo.id)}
                className='delete-icon'
            />

        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem