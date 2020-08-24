import React, { useState } from "react";
import { connect } from "react-redux";

import {
  addSubtask,
  removeSubtask,
  toggleTask,
  toggleSubtask,
} from "../../../store/actions";
import Subtask from "./Subtask";

import "./Task.css";
import { Checkbox, Collapse } from "@material-ui/core";
import deleteIcon from "../../../css/images/icone_deletar_tarefa-subtarefa.png";
import createIcon from "../../../css/images/botao_adicionar.png";

const Task = (props) => {
  const [subtask, setSubtask] = useState("");
  const [error, setError] = useState("");

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

    if (!newSubtask["name"]) {
      setError("Você esqueceu de digitar a nova subtarefa.");
    } else {
      props.addSubtask(props.listId, newSubtask);
      setSubtask("");
      setError("");
    }

    e.preventDefault();
  }

  const filteredSubtasks = props.subtasks.filter(
    (subtask) => subtask.taskId === props.task.id
  );

  function completeTask() {
    props.toggleTask(props.listId, props.task.id);

    if (!props.task.complete) {
      filteredSubtasks.map((subtask) => {
        return props.toggleSubtask(props.listId, subtask.id, true);
      });
    }
  }

  function deleteSubtask(toDelete) {
    props.removeSubtask(props.listId, toDelete);
  }

  function completeSubtask(listId, id) {
    props.toggleSubtask(listId, id);
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
          checked={props.task.complete === true}
        />
        <p
          className="taskBody"
          style={{
            textDecoration: props.task.complete ? "line-through" : "none",
          }}
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
                subtask={thisSubtask}
                toggleComplete={completeSubtask}
                editable={props.editable}
                delete={deleteSubtask}
                listId={props.listId}
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
        {error && <p className="errorText">{error}</p>}
      </Collapse>
    </li>
  );
};

export default connect(null, {
  addSubtask,
  removeSubtask,
  toggleTask,
  toggleSubtask,
})(Task);
