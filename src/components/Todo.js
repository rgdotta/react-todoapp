import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

const Todo = ({ todo }) => {
  return (
    <li className="todo-item">
      {todo.name}
      <ul>
        {todo.tasks.map((task, index) => {
          return <Task key={`task-${task.id}`} task={task} />;
        })}
      </ul>
    </li>
  );
};

// export default Todo;
export default connect(null, {})(Todo);
