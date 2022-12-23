import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import rootRudcer from "./reducers/rootRuducer";
import thunk from "redux-thunk"

const store = createStore(rootRudcer,composeWithDevTools(applyMiddleware(thunk)));

export default store;
