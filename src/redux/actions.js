import {
  ADD_TODO,
  REMOVE_TODO,
  RENAME_TODO,
  ADD_TASK,
  REMOVE_TASK,
  ADD_SUBTASK,
  REMOVE_SUBTASK,
} from "./actionTypes";

export const addTodo = (name, tasks) => ({
  type: ADD_TODO,
  payload: {
    name,
    tasks,
  },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id,
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

export const addSubtask = (listId, subtask) => ({
  type: ADD_SUBTASK,
  payload: {
    listId,
    subtask,
  },
});

export const removeSubtask = (listId, id) => ({
  type: REMOVE_SUBTASK,
  payload: {
    listId,
    id,
  },
});
