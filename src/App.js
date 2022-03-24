
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
  const [todos, setTodos] = React.useState(todo_list);
  const [search, setSearch] = React.useState('');

  const countCompleteTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];

  if (search.length > 0) {
    //Si se busca y encuentra un dato, retorno ese dato.
    searchTodos = todos.filter(todo => {
      //Convertir a minúscula para comparar con lo introducido en el search input
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      //Buscar dentro del string
      return todoText.includes(searchText);
    });

  } else { //Si no, retorno todos los datos.
    searchTodos = todos;
  }

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={countCompleteTodos}
      />

      <TodoSearch 
        search={search}
        setSearch={setSearch}
      />

      <TodoList>
        {searchTodos.map(todo => (
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
