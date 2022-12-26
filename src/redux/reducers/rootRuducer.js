import { combineReducers } from "redux";
import contentReducer from "./contentReducer";

const rootRudcer = combineReducers({
  contents:contentReducer,
});

export default rootRudcer;
