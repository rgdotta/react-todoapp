import React, { useState } from "react";
import Subtask from "./Subtask";
import { Checkbox, Collapse } from "@material-ui/core";
import deleteIcon from "../images/icone_deletar_tarefa-subtarefa.png";
import createIcon from "../images/botao_adicionar.png";

const Task = (props) => {
  const [subtasksList, setSubtasksList] = useState([]);
  const [subtask, setSubtask] = useState("");
  const [isComplete, setComplete] = useState(false);
  const [completedTask, setCompletedTask] = useState(0);

  function handleChange(input) {
    setSubtask(input);
  }

  function addSubtask(e) {
    const newSubtask = subtask;

    setSubtasksList((prevSubtasks) => {
      return [...prevSubtasks, newSubtask];
    });

    setSubtask("");

    e.preventDefault();
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
    <li className="task">
      <div
        className="flex row"
        style={{
          borderBottom: subtasksList.length > 0 ? "2px solid #b4d9cb" : "none",
        }}
      >
        <Checkbox
          className="taskCheckbox"
          onClick={completeTask}
          checked={isComplete === true}
        />
        <p
          className="taskBody"
          style={{ textDecoration: isComplete ? "line-through" : "none" }}
        >
          {props.task.name}
        </p>
        {props.editable && (
          <button
            className="noStyleBtn taskDeleteBtn"
            onClick={() => props.delete(props.task.id)}
          >
            <img src={deleteIcon} alt="delete" />
          </button>
        )}
      </div>
      <div>
        <ul style={{ marginLeft: "20px" }}>
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
      </div>
      <Collapse in={props.editable}>
        <form className="flex">
          <input
            className="taskInput defaultInput"
            value={subtask}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Adicionar Subtarefa"
          ></input>
          <button
            className="submitBtn noStyleBtn"
            onClick={(e) => addSubtask(e)}
          >
            <img src={createIcon} alt="Add Tarefa" />
          </button>
        </form>
      </Collapse>
    </li>
  );
};

export default Task;
