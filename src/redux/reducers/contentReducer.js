import {
  ADD_CONTENT,
  CONTENT_DETAILS,
  DELETE_CONTENT,
  GET_CONTENT,
} from "../actionTypes/actionTypes";

const initialState = {
  contents: [],
  content: {},
  count: 0,
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        count: action.payload.count,
        contents: action.payload.data,
      };
    case CONTENT_DETAILS: {
      return {
        ...state,
        content: action.payload,
      };
    }
    case ADD_CONTENT: {
      return {
        ...state,
        contents: [...state.contents, action.payload],
      };
    }
    case DELETE_CONTENT: {
      return {
        ...state,
        contents: state.contents.filter(
          (content) => content._id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};

export default contentReducer;
