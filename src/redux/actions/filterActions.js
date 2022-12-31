import {  SORT_BY_DATE } from "../actionTypes/filterTypes";

export const firstUploads = (data) => {
  return {
    type: SORT_BY_DATE,
    payload: data,
  };
};
