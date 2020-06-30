import React from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <Header />
      <TodoList />
    </div>
  );
}
