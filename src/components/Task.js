import React, { useState } from "react";
import Subtask from "./Subtask";

const Task = (props) => {
  const [subtasksList, setSubtasksList] = useState([]);
  const [subtask, setSubtask] = useState("");
  const [isComplete, setComplete] = useState(false);
  const [completedTask, setCompletedTask] = useState(0);

  function handleChange(input) {
    setSubtask(input);
  }

  function addSubtask() {
    const newSubtask = subtask;

    setSubtasksList((prevSubtasks) => {
      return [...prevSubtasks, newSubtask];
    });

    setSubtask("");
  }

  function completeTask() {
    setComplete(!isComplete);
  }

  function subtaskCompleted(completed) {
    const comparison = subtasksList.length;
    let value = completed;

    let newValue = completedTask + value;
    setCompletedTask(newValue);

    if (comparison === newValue) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }

  function deleteSubtask(toDelete) {
    let array = subtasksList;
    let filteredArray = array.filter((e) => e !== toDelete);

    setSubtasksList(filteredArray);
  }

  return (
    <li>
      <p
        style={{ textDecoration: isComplete ? "line-through" : "none" }}
        onClick={completeTask}
      >
        {props.task.name}
      </p>
      {props.editable && (
        <div>
          <input
            value={subtask}
            onChange={(e) => handleChange(e.target.value)}
          ></input>
          <button onClick={addSubtask}>Adicionar</button>
        </div>
      )}
      <ul>
        {subtasksList.map((thisSubtask, index) => {
          return (
            <Subtask
              key={index}
              subtask={thisSubtask}
              complete={subtaskCompleted}
              editable={props.editable}
              delete={deleteSubtask}
            />
          );
        })}
      </ul>
    </li>
  );
};

export default Task;
