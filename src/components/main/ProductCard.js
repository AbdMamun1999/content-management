import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-14">
      <div className="w-[55%] mx-auto">
        <div className="w-[100%] overflow-hidden">
          <Link to={`travel-places/${product._id}`}>
            <img
              src={product.img}
              alt=""
              className="hover:scale-110 duration-300 ease-in-out"
              style={{ objectFit: "cover", width: "100%", height: "500px" }}
            />
          </Link>
        </div>
        <div>
          <Link to={`travel-places/${product._id}`}>
            <h1 className="text-5xl font-semibold my-3 font-[montserrat] hover:text-[#f0473c] duration-300 ease-in-out">
              {product.place}
            </h1>
          </Link>
          <p className="text-xl font-[montserrat]">
            <span>{product.description.slice(0, 200) + "..."}</span>
          </p>
          <div>
            <button
              onClick={() => navigate(`travel-places/${product._id}`)}
              className="text-blue-700 font-[montserrat] mt-3"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
