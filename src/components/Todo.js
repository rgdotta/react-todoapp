import React from "react";
import { connect } from "react-redux";

const Todo = ({ todo }) => (
  <li className="todo-item">
    {todo.name}
    <ul>
      {todo.tasks.map((task, index) => {
        return <li key={index}>{task.name}</li>;
      })}
      {console.log(todo)}
    </ul>
  </li>
);

// export default Todo;
export default connect(null, {})(Todo);
