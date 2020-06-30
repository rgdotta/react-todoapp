import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { removeTodo, renameTodo, addTask, removeTask } from "../redux/actions";
import { Container } from "@material-ui/core";

const TodoList = ({ todos, removeTodo, renameTodo, addTask, removeTask }) => {
  return (
    <Container maxWidth="md">
      <div className="listContainer">
        <ul className="todo-list">
          {todos && todos.length
            ? todos.map((todo, index) => {
                return (
                  <Todo
                    key={`todo-${todo.id}`}
                    todo={todo}
                    removeTodo={removeTodo}
                    renameTodo={renameTodo}
                    addTask={addTask}
                    removeTask={removeTask}
                  />
                );
              })
            : ""}
        </ul>
      </div>
    </Container>
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

const mapDispatchToProps = { removeTodo, renameTodo, addTask, removeTask };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
