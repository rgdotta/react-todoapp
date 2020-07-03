import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";
import deleteIcon from "../images/icone_deletar_tarefa-subtarefa.png";

const Subtask = (props) => {
  const [isComplete, setComplete] = useState(false);

  function completeTask() {
    setComplete(!isComplete);

    if (isComplete === true) {
      props.complete(-1);
    } else {
      props.complete(1);
    }
  }

  return (
    <li className="subTask flex row">
      <Checkbox className="taskCheckbox" onClick={completeTask} />
      <p
        className="taskBody"
        style={{ textDecoration: isComplete ? "line-through" : "none" }}
      >
        {props.subtask}
      </p>
      {props.editable && (
        <button
          className="taskDeleteBtn noStyleBtn"
          onClick={() => props.delete(props.id)}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
      )}
    </li>
  );
};

export default Subtask;
