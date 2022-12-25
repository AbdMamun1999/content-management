import { createTravel } from "../../actions/travelAction";

const createTravelData = (travel) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/place`, {
      method: "POST",
      body: JSON.stringify(travel),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = res.json();
    if (data.acknowledged) {
      dispatch(createTravel({ _id: data.insertedId, ...travel }));
    }
  };
};

export default createTravelData;
