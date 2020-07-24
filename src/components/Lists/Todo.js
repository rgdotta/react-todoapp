import React, { useState } from "react";
import { connect } from "react-redux";
import Task from "./Task";

import { Button, Collapse } from "@material-ui/core";
import listIcon from "../../css/images/icone_lista.png";
import editIcon from "../../css/images/icone_editar.png";
import deleteIcon from "../../css/images/icone_deletar_lista.png";
import createIcon from "../../css/images/botao_adicionar.png";

const Todo = ({ todo, removeTodo, renameTodo, addTask, removeTask }) => {
  const [isEditable, setEditable] = useState(false);
  const [newName, setNewName] = useState("");
  const [newTask, setNewTask] = useState({ name: "" });
  const [rename, setRename] = useState(false);
  const [errors, setErrors] = useState({});

  function handleAddTask(e) {
    let newId;
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
    if (!newTask["name"]) {
      setErrors({
        newTask: "Você esqueceu de digitar a nova tarefa.",
      });
    } else {
      addTask(todo.id, newTask);
      setNewTask({ name: "" });
      setErrors({});
    }
    e.preventDefault();
  }

  function handleNameChange(e) {
    const name = e.target.value;

    setNewName(name);
  }

  function submitNewName(e) {
    if (!newName) {
      setErrors({ newName: "Novo nome não pode ser vazio." });
    } else {
      renameTodo(todo.id, newName);
      setRename(!rename);
      setErrors({});
    }
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
            {errors["newName"] && (
              <p className="errorText">{errors["newName"]}</p>
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
            {errors["newTask"] && (
              <p className="errorText">{errors["newTask"]}</p>
            )}
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
