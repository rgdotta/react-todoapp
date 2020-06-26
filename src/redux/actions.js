import { ADD_TODO, RENAME_TODO, ADD_TASK, REMOVE_TASK } from "./actionTypes";

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

export const addTask = (parentId, task) => ({
  type: ADD_TASK,
  payload: {
    parentId,
    task,
  },
});

export const removeTask = (parentId, id) => ({
  type: REMOVE_TASK,
  payload: {
    parentId,
    id,
  },
});
