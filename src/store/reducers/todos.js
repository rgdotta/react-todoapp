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
} from "../actionTypes";

const initialState = {
  allIds: [0, 1, 2],
  byIds: {
    0: {
      name: "Lista 1",
      tasks: [
        { id: 0, name: "Tarefa 1", complete: false },
        { id: 1, name: "Tarefa 2", complete: false },
        { id: 2, name: "Tarefa 3", complete: false },
      ],
      subtasks: [
        { id: 0, taskId: 0, name: "Subtarefa 1", complete: false },
        { id: 1, taskId: 1, name: "Subtarefa 1", complete: false },
        { id: 2, taskId: 0, name: "Subtarefa 2", complete: false },
        { id: 3, taskId: 0, name: "Subtarefa 3", complete: false },
      ],
    },
    1: {
      name: "Lista 2",
      tasks: [],
      subtasks: [],
    },
    2: {
      name: "Lista 3",
      tasks: [],
      subtasks: [],
    },
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { name, tasks } = action.payload;
      const getId = state.allIds.slice().reverse();
      const id = getId[0] + 1;
      const subtasks = [];

      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            name,
            tasks,
            subtasks,
          },
        },
      };
    }
    case REMOVE_TODO: {
      const { id } = action.payload;
      const todosById = state.allIds;

      const findIndex = todosById.findIndex((todo) => {
        return todo === id;
      });

      const newAllIds = [...state.allIds];
      newAllIds.splice(findIndex, 1);

      const { [id]: toDelete, ...newByIds } = state.byIds;

      return {
        ...state,
        allIds: [...newAllIds],
        byIds: {
          ...newByIds,
        },
      };
    }
    case RENAME_TODO: {
      const { id, name } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            name,
          },
        },
      };
    }
    case ADD_TASK: {
      const { parentId, task } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [parentId]: {
            ...state.byIds[parentId],
            tasks: [...state.byIds[parentId].tasks, task],
          },
        },
      };
    }
    case REMOVE_TASK: {
      const { parentId, id } = action.payload;
      const task = state.byIds[parentId].tasks;

      const findIndex = task.findIndex((task) => {
        return task.id === id;
      });

      const newTasks = [...task];
      newTasks.splice(findIndex, 1);

      return {
        ...state,
        byIds: {
          ...state.byIds,
          [parentId]: {
            ...state.byIds[parentId],
            tasks: [...newTasks],
          },
        },
      };
    }
    case ADD_SUBTASK: {
      const { listId, subtask } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [listId]: {
            ...state.byIds[listId],
            subtasks: [...state.byIds[listId].subtasks, subtask],
          },
        },
      };
    }
    case REMOVE_SUBTASK: {
      const { listId, id } = action.payload;
      const subtask = state.byIds[listId].subtasks;

      const findIndex = subtask.findIndex((subtask) => {
        return subtask.id === id;
      });

      const newSubtasks = [...subtask];
      newSubtasks.splice(findIndex, 1);

      return {
        ...state,
        byIds: {
          ...state.byIds,
          [listId]: {
            ...state.byIds[listId],
            subtasks: [...newSubtasks],
          },
        },
      };
    }
    case TOGGLE_TASK: {
      const { listId, id, boolean } = action.payload;
      const taskList = state.byIds[listId].tasks;

      const findIndex = taskList.findIndex((task) => {
        return task.id === id;
      });

      const status = { ...state.byIds[listId].tasks[findIndex] };

      boolean
        ? (status.complete = boolean)
        : status.complete
        ? (status.complete = false)
        : (status.complete = true);

      const newTasks = [...taskList];
      newTasks.splice(findIndex, 1, status);
      console.log("a");
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [listId]: {
            ...state.byIds[listId],
            tasks: [...newTasks],
          },
        },
      };
    }
    case TOGGLE_SUBTASK: {
      const { listId, id, boolean } = action.payload;
      const subtaskList = state.byIds[listId].subtasks;

      const findIndex = subtaskList.findIndex((subtask) => {
        return subtask.id === id;
      });

      const status = { ...state.byIds[listId].subtasks[findIndex] };

      boolean
        ? (status.complete = boolean)
        : status.complete
        ? (status.complete = false)
        : (status.complete = true);

      const newSubtasks = [...subtaskList];
      newSubtasks.splice(findIndex, 1, status);

      return {
        ...state,
        byIds: {
          ...state.byIds,
          [listId]: {
            ...state.byIds[listId],
            subtasks: [...newSubtasks],
          },
        },
      };
    }
    default:
      return state;
  }
}
