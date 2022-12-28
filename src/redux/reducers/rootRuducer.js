import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
import paginationReducer from "./paginationReducer";

const rootRudcer = combineReducers({
  contents: contentReducer,
  pagination: paginationReducer,
});

export default rootRudcer;
