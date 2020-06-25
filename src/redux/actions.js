import { ADD_TODO } from "./actionTypes";

let nextTodoId = 3;

export const addTodo = (name, tasks) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    name,
    tasks,
  },
});
