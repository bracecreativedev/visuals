import { combineReducers } from "redux";
import projectReducer from "./projectReducer";

// Combine all reducers
export default combineReducers({
  projects: projectReducer
});
