import {
  SET_CURRENT_PAGE,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
  SET_TOTAL_PAGE,
} from "../actionTypes/paginationActionType";

const initialState = {
  page: 0,
  size: 5,
  totalPage: 0,
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_PAGE:
      return {
        state,
        totalPage: action.payload,
      };

    case SET_PREVIOUS_PAGE:
      if (state.page > 0) {
        return {
          ...state,
          size: 5,
          page: state.page - 1,
        };
      } else {
        return state;
      }
    case SET_CURRENT_PAGE:
      return {
        state,
        size: 5,
        page: action.payload,
      };
    case SET_NEXT_PAGE:
      if (state.page < 5) {
        return {
          ...state,
          size: 5,
          page: state.page + 1,
        };
      } else {
        return {
          ...state,
          size: 5,
          page: state.totalPage,
        };
      }

    default:
      return state;
  }
};

export default paginationReducer;
