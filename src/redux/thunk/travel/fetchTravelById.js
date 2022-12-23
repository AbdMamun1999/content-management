import { travelDetails } from "../../actions/travelAction";

const fetchTravelById = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/places/${id}`);
    const data = await res.json();

    dispatch(travelDetails(data.data));
  };
};

export default fetchTravelById;
