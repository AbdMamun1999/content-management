import React from "react";
import { useParams } from "react-router-dom";

const TravelUpdate = () => {
  const { listTravelId } = useParams();
  return (
    <div>
      <h1>Travel Update</h1>
    </div>
  );
};

export default TravelUpdate;
