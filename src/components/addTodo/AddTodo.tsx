import React, { useState } from 'react';
import './addTodo.css';
import { useGlobalTodo } from '../../context/TodoContext';
import { Todo } from '../../types/todoModel';

const AddTodo: React.FC = () => {

    const { addTodo } = useGlobalTodo();

    const [newTodo, setNewTodo] = useState<Todo>({name: "", done: false});

    return (
        <div className='add-todo'>
            <input type="text" placeholder='add task' onChange={(e) => {setNewTodo({...newTodo, name: e.target.value})}}/>
            <button onClick={() => {addTodo(newTodo)}}>Add</button>
        </div>
    )
}

export default AddTodo