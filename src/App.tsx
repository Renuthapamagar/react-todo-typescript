import { ReactElement } from 'react';
import './App.css';
import TodoList from './components/todoList';

function App(): ReactElement<Element> {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App



