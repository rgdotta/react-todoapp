import { ADD_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
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
            completed: false,
          },
        },
      };
    }
    default:
      return state;
  }
}
