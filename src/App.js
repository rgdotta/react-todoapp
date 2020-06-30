import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import "./styles.css";

export default function TodoApp() {
  const [createList, setCreateList] = useState(false);
  return (
    <div className="todo-app">
      <Header />
      {createList ? (
        <div>
          <AddTodo />
          <button onClick={() => setCreateList(false)}>Esconder</button>
        </div>
      ) : (
        <button onClick={() => setCreateList(true)}>
          Criar Lista de Tarefas
        </button>
      )}
      <TodoList />
    </div>
  );
}
