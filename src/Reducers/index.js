import { combineReducers } from "redux";
import numberState from "./counter";

const rootReducer = combineReducers({numberState});
export default rootReducer;