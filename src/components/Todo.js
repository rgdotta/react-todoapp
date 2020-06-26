import React, { useState } from "react";
import { connect } from "react-redux";
import Task from "./Task";

const Todo = ({ todo, renameTodo, addTask, removeTask }) => {
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

  function submitNewTask() {
    addTask(todo.id, newTask);
    setNewTask({ name: "" });
  }

  function handleNameChange(e) {
    const name = e.target.value;

    setNewName(name);
  }

  function submitNewName() {
    renameTodo(todo.id, newName);
    setRename(!rename);
  }

  function deleteTask(id) {
    removeTask(todo.id, id);
  }

  return (
    <li className="todo-item">
      {isEditable ? (
        <div>
          {rename ? (
            <input
              type="text"
              placeholder={todo.name}
              onChange={handleNameChange}
            />
          ) : (
            <p>{todo.name}</p>
          )}
          <button onClick={submitNewName}>Renomear</button>
        </div>
      ) : (
        <p>{todo.name}</p>
      )}
      <button
        onClick={() => {
          setEditable(!isEditable);
          setRename(true);
        }}
      >
        {isEditable ? "Cancelar" : "Editar"}
      </button>
      {isEditable && (
        <div>
          <input type="text" value={newTask.name} onChange={handleAddTask} />
          <button onClick={submitNewTask}>Adicionar Tarefa</button>
        </div>
      )}
      {console.log(todo)}
      <ul>
        {todo.tasks &&
          todo.tasks.map((task, index) => {
            return (
              <div key={index}>
                <Task
                  key={`task-${task.id}`}
                  task={task}
                  editable={isEditable}
                  delete={deleteTask}
                />
                {console.log(task)}
              </div>
            );
          })}
      </ul>
    </li>
  );
};

export default connect(null, {})(Todo);
