import { combineReducers } from "redux";
import travelReducer from "./travelReducer";

const rootRudcer = combineReducers({
  travel: travelReducer,
});

export default rootRudcer;
