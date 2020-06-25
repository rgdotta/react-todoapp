import React, { useState } from "react";
import { connect } from "react-redux";
import Task from "./Task";

const Todo = ({ todo }) => {
  const [isEditable, setEditable] = useState(false);

  return (
    <li className="todo-item">
      <p>{todo.name}</p>
      <button onClick={() => setEditable(!isEditable)}>Edit</button>
      <ul>
        {todo.tasks.map((task, index) => {
          console.log(task.defaultSubtask);
          return (
            <Task key={`task-${task.id}`} task={task} editable={isEditable} />
          );
        })}
      </ul>
    </li>
  );
};

// export default Todo;
export default connect(null, {})(Todo);
