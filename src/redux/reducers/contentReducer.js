import {
  ADD_CONTENT,
  CLOSE_DELETE_MODAL,
  CONTENT_DETAILS,
  DELETE_CONTENT,
  GET_CONTENT,
  IS_UPLOAD,
  OPEN_DELETE_MODAL,
  OPEN_UPDATE_PAGE,
  SET_DATE_CREATE_CONTENT,
} from "../actionTypes/actionTypes";

const initialState = {
  contents: [],
  content: {},
  count: 0,
  deleteContent: false,
  updatePage: false,
  date: new Date(),
  isUpload: false,
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        count: action.payload.count,
        contents: action.payload.data,
      };
    case CONTENT_DETAILS:
      return {
        ...state,
        content: action.payload,
      };

    case ADD_CONTENT:
      return {
        ...state,
        contents: [...state.contents, action.payload],
      };

    case OPEN_DELETE_MODAL:
      return {
        ...state,
        deleteContent: action.payload,
      };
    case DELETE_CONTENT:
      return {
        ...state,
        contents: state.contents.filter(
          (content) => content._id !== action.payload
        ),
      };

    case OPEN_UPDATE_PAGE:
      return {
        ...state,
        updatePage: action.payload,
      };

    case SET_DATE_CREATE_CONTENT:
      return {
        ...state,
        date: action.payload,
      };

    case IS_UPLOAD:
      return {
        ...state,
        isUpload: action.payload,
      };

    default:
      return state;
  }
};

export default contentReducer;
