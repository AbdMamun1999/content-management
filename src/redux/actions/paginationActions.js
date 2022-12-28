import {
  PAGE_COUNT,
  SET_CURRENT_PAGE,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
  SET_TOTAL_PAGE,
} from "../actionTypes/paginationActionType";

export const setTotalPage = (data) => {
  return {
    type: SET_TOTAL_PAGE,
    payload: data,
  };
};

export const currentPage = (data) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: data,
  };
};

export const previousPage = () => {
  return {
    type: SET_PREVIOUS_PAGE,
  };
};

export const nextPage = () => {
  return {
    type: SET_NEXT_PAGE,
  };
};
