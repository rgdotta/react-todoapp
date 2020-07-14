import React, { useState } from "react";
import { connect } from "react-redux";

import { addSubtask, removeSubtask } from "../../redux/actions";
import Subtask from "./Subtask";

import { Checkbox, Collapse } from "@material-ui/core";
import deleteIcon from "../../css/images/icone_deletar_tarefa-subtarefa.png";
import createIcon from "../../css/images/botao_adicionar.png";

const Task = (props) => {
  const [subtask, setSubtask] = useState("");
  const [isComplete, setComplete] = useState(false);
  const [completedTask, setCompletedTask] = useState(0);

  function handleChange(input) {
    setSubtask(input);
  }

  function submitSubtask(e) {
    var newId;
    if (props.subtasks.length > 0) {
      const getLastId = props.subtasks.slice().reverse();
      const lastId = getLastId[0].id;
      newId = lastId + 1;
    } else {
      newId = 0;
    }
    const newSubtask = { id: newId, taskId: props.task.id, name: subtask };

    props.addSubtask(props.listId, newSubtask);

    setSubtask("");

    e.preventDefault();
  }

  function completeTask() {
    setComplete(!isComplete);
  }

  const filteredSubtasks = props.subtasks.filter(
    (subtask) => subtask.taskId === props.task.id
  );

  function subtaskCompleted(completed) {
    const comparison = filteredSubtasks.length;
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
    props.removeSubtask(props.listId, toDelete);
  }

  return (
    <li className="task">
      <div
        className="flex row"
        style={{
          borderBottom:
            filteredSubtasks.length > 0 ? "2px solid #b4d9cb" : "none",
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
          {filteredSubtasks.map((thisSubtask, index) => {
            return (
              <Subtask
                key={index}
                id={thisSubtask.id}
                subtask={thisSubtask.name}
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
            onClick={(e) => submitSubtask(e)}
          >
            <img src={createIcon} alt="Add Tarefa" />
          </button>
        </form>
      </Collapse>
    </li>
  );
};

export default connect(null, { addSubtask, removeSubtask })(Task);
