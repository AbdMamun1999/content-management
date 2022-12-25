import {
  CREATE_DATA,
  LOAD_TRAVEL,
  TRAVEL_DETAILS,
} from "../actionTypes/actionTypes";

const initialState = {
  travels: [],
  travel: {},
  count: 0,
};

const travelReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRAVEL:
      return {
        ...state,
        count: action.payload.count,
        travels: action.payload.data,
      };
    case TRAVEL_DETAILS: {
      return {
        ...state,
        travel: action.payload,
      };
    }
    case CREATE_DATA: {
      return {
        ...state,
        travels: [...state.travels, action.payload],
      };
    }
    default:
      return state;
  }
};

export default travelReducer;
