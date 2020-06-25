import React, { useState } from "react";

const Task = (props) => {
  const [subtasksList, setSubtasksList] = useState([]);
  const [subtask, setSubtask] = useState([""]);
  const [isComplete, setComplete] = useState(false);

  function handleChange(input) {
    setSubtask(input);
  }

  function addSubtask() {
    const newSubtask = subtask;

    setSubtasksList((prevSubtasks) => {
      return [...prevSubtasks, newSubtask];
    });
  }

  function completeTask() {
    setComplete(!isComplete);
  }

  return (
    <li>
      {console.log(isComplete)}
      <p
        style={{ textDecoration: isComplete ? "line-through" : "none" }}
        onClick={completeTask}
      >
        {props.task.name}
      </p>
      <input onChange={(e) => handleChange(e.target.value)}></input>
      <button onClick={addSubtask}>Adicionar</button>
      <ul>
        {subtasksList.map((thisSubtask, index) => {
          return <li key={index}>{thisSubtask}</li>;
        })}
      </ul>
    </li>
  );
};

export default Task;
