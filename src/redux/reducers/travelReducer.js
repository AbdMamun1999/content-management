import { LOAD_TRAVEL, TRAVEL_DETAILS } from "../actionTypes/actionTypes";

const initialState = {
  travels: [],
  travel: {},
};

const travelReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRAVEL:
      return {
        ...state,
        travels: action.payload,
      };
    case TRAVEL_DETAILS: {
      return {
        ...state,
        travel: action.payload,
      };
    }
    default:
      return state;
  }
};

export default travelReducer;
