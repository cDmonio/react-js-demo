
// import './App.css';
import React from "react";
import { TodoCounter } from "./components/TodoCounter/TodoCounter"
import { TodoSearch } from "./components/TodoSearch/TodoSearch"
import { TodoList } from "./components/TodoList/TodoList"
import { TodoItem } from "./components/TodoItem/TodoItem"
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton"

const todo_list = [
  {
    text: 'Cook', 
    completed: true
  },
  {
    text: 'Eat', 
    completed: false
  },
  {
    text: 'Sleep', 
    completed: false
  },
  {
    text: 'Studying', 
    completed: false
  },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todo_list.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>

  );
}

export default App;
