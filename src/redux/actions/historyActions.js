import { ADD_HISTORY } from "../actionTypes/historyTypes";

export const addHistory = (data) => {
  return {
    type: ADD_HISTORY,
    payload: data,
  };
};
