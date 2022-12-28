import { getContents } from "../../actions/contentActions";

const getContentsLoad = (page, size) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `http://localhost:5000/places?page=${page}&size=${size}`
    );
    const data = await res.json();
    if (data.data.length) {
      dispatch(getContents(data));
    }
  };
};

export default getContentsLoad;
