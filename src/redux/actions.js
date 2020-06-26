import { ADD_TODO, RENAME_TODO } from "./actionTypes";

let nextTodoId = 3;

export const addTodo = (name, tasks) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    name,
    tasks,
  },
});

export const renameTodo = (id, name) => ({
  type: RENAME_TODO,
  payload: {
    id,
    name,
  },
});
