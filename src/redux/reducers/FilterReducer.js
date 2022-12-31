import { FIRST_UPLOADS, SORT_BY_DATE } from "../actionTypes/filterTypes";

const initialState = {
  sorts: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_DATE:
      if (!state.sorts.includes(action.payload)) {
        return {
          ...state,
          sorts: [...state.sorts, action.payload],
        };
      } else {
        return {
          ...state,
          sorts: state.sorts.filter((sort) => sort !== action.payload),
        };
      }

    default:
      return state;
  }
};

export default filterReducer;
