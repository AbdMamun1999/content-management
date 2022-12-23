import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadTravelData from "../../redux/thunk/travel/fetchTravel";
import ProductCard from "./ProductCard";

const Products = () => {
  const travels = useSelector(state=>state.travel.travels)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadTravelData())
  }, []);

  return (
    <div>
      {travels.map((ele) => (
        <ProductCard key={ele._id} product={ele} />
      ))}
    </div>
  );
};

export default Products;
