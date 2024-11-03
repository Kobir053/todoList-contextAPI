import './App.css';
import AddTodo from './components/addTodo/AddTodo'
import TodoGrid from './components/todoGrid/TodoGrid'

function App() {

  return (
    <div className='app'>
      <h1>TODO LIST</h1>
      <AddTodo/>
      <TodoGrid/>
    </div>
  )
}

export default App
