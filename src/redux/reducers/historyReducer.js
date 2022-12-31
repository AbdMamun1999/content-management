import { ADD_HISTORY } from "../actionTypes/historyTypes";

const initialState = {
  history: [],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HISTORY:
      return {
        ...state,
        history: [...state.history],
      };
    default:
      return state;
  }
};

export default historyReducer;
