import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
import filterReducer from "./FilterReducer";
import historyReducer from "./historyReducer";
import paginationReducer from "./paginationReducer";

const rootRudcer = combineReducers({
  contents: contentReducer,
  pagination: paginationReducer,
  history: historyReducer,
  filter: filterReducer,
});

export default rootRudcer;
