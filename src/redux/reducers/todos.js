import { ADD_TODO, RENAME_TODO, ADD_TASK, REMOVE_TASK } from "../actionTypes";

const initialState = {
  allIds: [0, 1, 2],
  byIds: {
    0: {
      name: "Trabalho",
      tasks: [
        { id: 0, name: "Tarefa 1" },
        { id: 1, name: "Tarefa 2" },
        { id: 2, name: "Tarefa 3" },
      ],
    },
    1: {
      name: "Afazeres da Casa",
      tasks: [],
    },
    2: {
      name: "Compras",
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

      return {
        ...state,
        byIds: {
          ...state.byIds,
          [parentId]: {
            ...state.byIds[parentId],
            tasks: [task.slice(0, id), task.slice(id + 1)],
          },
        },
      };
    }
    default:
      return state;
  }
}
