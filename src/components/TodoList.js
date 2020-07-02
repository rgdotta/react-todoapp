import React, { useState } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import Header from "./Header";
import { removeTodo, renameTodo, addTask, removeTask } from "../redux/actions";
import { Container, Collapse } from "@material-ui/core";
import createIcon from "../images/botao_adicionar.png";

const TodoList = ({ todos, removeTodo, renameTodo, addTask, removeTask }) => {
  const [createList, setCreateList] = useState(false);

  return (
    <div>
      <Header />
      <Container className="containerMaxWidth">
        <Collapse in={createList}>
          <AddTodo cancel={() => setCreateList(false)} />
        </Collapse>
        <div className="flex listMainTitleContainer">
          <div className="mainTitle">
            <h1>Listas</h1>
          </div>
          {!createList && (
            <div className="createBtn">
              <button
                className="noStyleBtn"
                onClick={() => setCreateList(true)}
              >
                <img src={createIcon} alt="new list" />
              </button>
            </div>
          )}
        </div>
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
    </div>
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
