import {
  ADD_CONTENT,
  CLOSE_DELETE_MODAL,
  CONTENT_DETAILS,
  DELETE_CONTENT,
  GET_CONTENT,
  OPEN_DELETE_MODAL,
  OPEN_UPDATE_PAGE,
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

export const openDeleteModal = (data) => {
  return { type: OPEN_DELETE_MODAL, payload: data };
};

export const openUpdatePage = data =>{
  return {type:OPEN_UPDATE_PAGE,payload:data}
}

