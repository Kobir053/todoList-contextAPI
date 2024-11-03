import React from 'react';
import './todoItem.css';
import { useGlobalTodo } from '../../context/TodoContext';
import { Todo } from '../../types/todoModel';

interface TodoItemProps {
    index: number;
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index }) => {

    const { updateTodo, deleteTodo } = useGlobalTodo();

    return (
        <div className='todo-item'>
            <p onClick={() => {updateTodo(index)}} className='done-paragraph'>{todo.done? "✅": "❌"}</p>
            <p>{todo.name}</p>
            <button onClick={() => {deleteTodo(index)}}>Delete</button>
        </div>
    )
}

export default TodoItem;