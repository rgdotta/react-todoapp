import { SET_USERNAME } from "../actionTypes";

const initialState = "";

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME: {
      const newName = action.payload;

      return newName;
    }
    default:
      return state;
  }
}
