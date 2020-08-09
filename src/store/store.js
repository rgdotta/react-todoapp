import { createStore } from "redux";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localstorage";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
    username: store.getState().username,
  });
});

export default store;
