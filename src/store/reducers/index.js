import { combineReducers } from "redux";
import todos from "./todos";
import username from "./username";

export default combineReducers({ todos, username });
