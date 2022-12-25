import { loadTravel } from "../../actions/travelAction";

const loadTravelData = () => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `http://localhost:5000/places?page`
    );
    const data = await res.json();
    if (data.data.length) {
      dispatch(loadTravel(data));
    }
  };
};

export default loadTravelData;
