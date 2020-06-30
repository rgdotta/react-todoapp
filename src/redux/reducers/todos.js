import {
  ADD_TODO,
  REMOVE_TODO,
  RENAME_TODO,
  ADD_TASK,
  REMOVE_TASK,
} from "../actionTypes";

const initialState = {
  allIds: [0, 1, 2],
  byIds: {
    0: {
      name: "Lista 1",
      tasks: [
        { id: 0, name: "Tarefa 1" },
        { id: 1, name: "Tarefa 2" },
        { id: 2, name: "Tarefa 3" },
      ],
    },
    1: {
      name: "Lista 2",
      tasks: [],
    },
    2: {
      name: "Lista 3",
      tasks: [],
    },
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, name, tasks } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            name,
            tasks,
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

      console.log(state.allIds, findIndex);

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
    default:
      return state;
  }
}
