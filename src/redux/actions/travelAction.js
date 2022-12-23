import { LOAD_TRAVEL, TRAVEL_DETAILS } from "../actionTypes/actionTypes";

export const loadTravel = (data) => {
  return { type: LOAD_TRAVEL, payload: data };
};

export const travelDetails = (data) => {
  return { type: TRAVEL_DETAILS, payload: data };
};
