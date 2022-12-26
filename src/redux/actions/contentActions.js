import {
  ADD_CONTENT,
  CONTENT_DETAILS,
  DELETE_CONTENT,
  GET_CONTENT,
} from "../actionTypes/actionTypes";

export const getContents = (data) => {
  return { type: GET_CONTENT, payload: data };
};

export const contentDetails = (data) => {
  return { type: CONTENT_DETAILS, payload: data };
};

export const createContent = (data) => {
  return { type: ADD_CONTENT, payload: data };
};

export const deleteContent = (id) => {
  return { type: DELETE_CONTENT, payload: id };
};
