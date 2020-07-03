import React, { useState } from "react";
import { connect } from "react-redux";
import Task from "./Task";
import { Button, Collapse } from "@material-ui/core";
import listIcon from "../images/icone_lista.png";
import editIcon from "../images/icone_editar.png";
import deleteIcon from "../images/icone_deletar_lista.png";
import createIcon from "../images/botao_adicionar.png";

const Todo = ({ todo, removeTodo, renameTodo, addTask, removeTask }) => {
  const [isEditable, setEditable] = useState(false);
  const [newName, setNewName] = useState("");
  const [newTask, setNewTask] = useState({ name: "" });
  const [rename, setRename] = useState(false);

  function handleAddTask(e) {
    var newId;
    if (todo.tasks.length > 0) {
      const getLastId = todo.tasks.slice().reverse();
      const lastId = getLastId[0].id;
      newId = lastId + 1;
    } else {
      newId = 0;
    }

    const task = { id: newId, name: e.target.value };

    setNewTask(task);
  }

  function submitNewTask(e) {
    addTask(todo.id, newTask);
    setNewTask({ name: "" });

    e.preventDefault();
  }

  function handleNameChange(e) {
    const name = e.target.value;

    setNewName(name);
  }

  function submitNewName(e) {
    renameTodo(todo.id, newName);
    setRename(!rename);
    e.preventDefault();
  }

  function deleteTask(id) {
    removeTask(todo.id, id);
  }

  return (
    <li className="todoItem">
      <div className="flex todoContainer">
        <div className="listIcon todoSecondary">
          <img src={listIcon} alt="LI" />
        </div>
        <div className="todoMain">
          <div className="listTitle">
            {isEditable ? (
              <div>
                {rename ? (
                  <form className="flex">
                    <input
                      className="defaultInput renameInput"
                      type="text"
                      placeholder={"Renomear " + todo.name}
                      onChange={handleNameChange}
                    />
                    <Button
                      className="submitBtn renameBtn"
                      onClick={(e) => submitNewName(e)}
                    >
                      Editar
                    </Button>
                  </form>
                ) : (
                  <p>{todo.name}</p>
                )}
              </div>
            ) : (
              <p>{todo.name}</p>
            )}
          </div>
          <Collapse in={isEditable}>
            <form className="flex">
              <input
                className="defaultInput"
                type="text"
                value={newTask.name}
                onChange={handleAddTask}
                placeholder="Adicionar Tarefa"
              />
              <button
                className="submitBtn noStyleBtn"
                type="submit"
                onClick={(e) => submitNewTask(e)}
              >
                <img src={createIcon} alt="Add tarefa" />
              </button>
            </form>
          </Collapse>
          <ul className="taskList">
            {todo.tasks &&
              todo.tasks.map((task, index) => {
                return (
                  <div key={index}>
                    <Task
                      key={`task-${task.id}`}
                      task={task}
                      editable={isEditable}
                      delete={deleteTask}
                      subtasks={todo.subtasks}
                      listId={todo.id}
                    />
                  </div>
                );
              })}
          </ul>
        </div>
        <div className="flex btnRow todoSecondary">
          <button
            className="noStyleBtn"
            onClick={() => {
              setEditable(!isEditable);
              setRename(true);
            }}
          >
            <img src={editIcon} alt="edit" />
          </button>
          <button className="noStyleBtn" onClick={() => removeTodo(todo.id)}>
            <img src={deleteIcon} alt="delete" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default connect(null, {})(Todo);
