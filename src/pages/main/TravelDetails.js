import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/main/Navbar";
import { TRAVEL_DETAILS } from "../../redux/actionTypes/actionTypes";
import fetchTravelById from "../../redux/thunk/travel/fetchTravelById";

const TravelDetails = () => {
  const { placeId } = useParams();
  const travel = useSelector((state) => state.travel.travel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTravelById(placeId));
  }, []);

  return (
    <div className="bg-[#f1f1f1]">
      <Navbar/>
      <div className="sm:w-full md:w-[80%] lg:w-[50%] bg-white p-10 pt-0 mx-auto mt-10">
        <div>
          <h1 className="text-center text-5xl font-semibold py-5 font-[montserrat]">{travel.place}</h1>
        </div>
        <div>
          <img src={travel.img} alt="" className="mx-auto" width="100%"/>
        </div>
        <div>
          <p className="mt-5 text-[2016] font-[montserrat]">{travel.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TravelDetails;
