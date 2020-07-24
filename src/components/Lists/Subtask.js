import React from "react";

import { Checkbox } from "@material-ui/core";
import deleteIcon from "../../css/images/icone_deletar_tarefa-subtarefa.png";

const Subtask = (props) => {
  return (
    <li className="subTask flex row">
      <Checkbox
        className="taskCheckbox"
        onClick={() => props.toggleComplete(props.listId, props.subtask.id)}
        checked={props.subtask.complete === true}
      />
      <p
        className="taskBody"
        style={{
          textDecoration: props.subtask.complete ? "line-through" : "none",
        }}
      >
        {props.subtask.name}
      </p>
      {props.editable && (
        <button
          className="taskDeleteBtn noStyleBtn"
          onClick={() => props.delete(props.subtask.id)}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
      )}
    </li>
  );
};

export default Subtask;
