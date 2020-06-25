import { ADD_TODO } from "../actionTypes";

const initialState = {
  allIds: [0, 1, 2],
  byIds: {
    0: {
      name: "Trabalho",
      tasks: [],
    },
    1: {
      name: "Afazeres da Casa",
      tasks: [],
    },
    2: {
      name: "Compras",
      tasks: [
        { id: 0, name: "Carne" },
        { id: 1, name: "Leite" },
        { id: 2, name: "Verduras" },
      ],
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
    default:
      return state;
  }
}
