import { loadTravel } from "../../actions/travelAction";

const loadTravelData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/places");
    const data = await res.json();
    if (data.data.length) {
      dispatch(loadTravel(data.data));
    }
  };
};


export default loadTravelData