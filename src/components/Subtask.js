import React, { useState } from "react";

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
    <li>
      <p
        style={{ textDecoration: isComplete ? "line-through" : "none" }}
        onClick={completeTask}
      >
        {props.subtask}
      </p>
      {props.editable && (
        <button onClick={() => props.delete(props.subtask)}>X</button>
      )}
    </li>
  );
};

export default Subtask;
