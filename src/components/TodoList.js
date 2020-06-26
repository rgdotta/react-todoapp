import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { renameTodo, addTask, removeTask } from "../redux/actions";

const TodoList = ({ todos, renameTodo, addTask, removeTask }) => {
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            return (
              <Todo
                key={`todo-${todo.id}`}
                todo={todo}
                renameTodo={renameTodo}
                addTask={addTask}
                removeTask={removeTask}
              />
            );
          })
        : ""}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { byIds, allIds } = state.todos || {};
  const todos =
    allIds && state.todos.allIds.length
      ? allIds.map((id) => (byIds ? { ...byIds[id], id } : null))
      : null;
  return { todos };
};

const mapDispatchToProps = { renameTodo, addTask, removeTask };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
