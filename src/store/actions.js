import {
  ADD_TODO,
  REMOVE_TODO,
  RENAME_TODO,
  ADD_TASK,
  REMOVE_TASK,
  ADD_SUBTASK,
  REMOVE_SUBTASK,
  TOGGLE_TASK,
  TOGGLE_SUBTASK,
  SET_USERNAME,
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

export const toggleTask = (listId, id, boolean) => ({
  type: TOGGLE_TASK,
  payload: {
    listId,
    id,
    boolean,
  },
});

export const toggleSubtask = (listId, id, boolean) => ({
  type: TOGGLE_SUBTASK,
  payload: {
    listId,
    id,
    boolean,
  },
});

export const setUsername = (name) => ({
  type: SET_USERNAME,
  payload: {
    name,
  },
});
