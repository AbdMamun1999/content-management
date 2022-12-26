import { getContents } from "../../actions/contentActions";

const getContentsLoad = () => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `http://localhost:5000/places?page`
    );
    const data = await res.json();
    if (data.data.length) {
      dispatch(getContents(data));
    }
  };
};

export default getContentsLoad;
