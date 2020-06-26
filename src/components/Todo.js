import React, { useState } from "react";
import { connect } from "react-redux";
import Task from "./Task";

const Todo = ({ todo, renameTodo }) => {
  const [isEditable, setEditable] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    const name = e.target.value;

    setNewName(name);
  }

  function submitNewName() {
    renameTodo(todo.id, newName);
  }

  return (
    <li className="todo-item">
      <p>{todo.name}</p>
      <button onClick={() => setEditable(!isEditable)}>
        {isEditable ? "Cancelar" : "Editar"}
      </button>
      {isEditable && (
        <div>
          <input onChange={handleChange} type="text"></input>
          <button onClick={submitNewName}>Renomear</button>
        </div>
      )}
      <ul>
        {todo.tasks &&
          todo.tasks.map((task, index) => {
            console.log(task.defaultSubtask);
            return (
              <Task key={`task-${task.id}`} task={task} editable={isEditable} />
            );
          })}
      </ul>
    </li>
  );
};

export default connect(null, {})(Todo);
