import React, { useState, useEffect } from "react";

import { Checkbox } from "@material-ui/core";
import deleteIcon from "../../css/images/icone_deletar_tarefa-subtarefa.png";

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

  useEffect(() => {
    if (props.taskCompleted) {
      setComplete(true);
    }
  }, [props.taskCompleted]);

  return (
    <li className="subTask flex row">
      <Checkbox
        className="taskCheckbox"
        onClick={completeTask}
        checked={isComplete}
      />
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
