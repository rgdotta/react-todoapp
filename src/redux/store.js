import { createStore } from "redux";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localstorage";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  console.log(store.getState());
  saveState({
    todos: store.getState().todos,
  });
});

export default store;
