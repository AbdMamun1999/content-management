import { contentDetails } from "../../actions/contentActions";

const getContentById = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/places/${id}`);
    const data = await res.json();

    dispatch(contentDetails(data.data));
  };
};

export default getContentById;
