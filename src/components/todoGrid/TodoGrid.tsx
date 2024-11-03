import React from 'react';
import './todoGrid.css';
import { useGlobalTodo } from '../../context/TodoContext';
import { Todo } from '../../types/todoModel';
import TodoItem from '../todoItem/TodoItem';

const TodoGrid: React.FC = () => {

    const { todoList } = useGlobalTodo();

    const renderTasks = () => {
        if(todoList.length == 0) return;
        return todoList.map((todo: Todo, idx: number) => {
          return <TodoItem todo={todo} index={idx}/>
        })
    }

  return (
    <div className='todo-grid'>
        {renderTasks()}
    </div>
  )
}

export default TodoGrid