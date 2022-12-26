import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ContentCard = ({ content }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-14">
      <div className="w-[55%] mx-auto">
        <div className="w-[100%] overflow-hidden">
          <Link to={`contents/${content._id}`}>
            <img
              src={content.img}
              alt=""
              className="hover:scale-110 duration-300 ease-in-out"
              style={{ objectFit: "cover", width: "100%", height: "500px" }}
            />
          </Link>
        </div>
        <div>
          <Link to={`contents/${content._id}`}>
            <h1 className="text-5xl font-semibold my-3 font-[montserrat] hover:text-[#f0473c] duration-300 ease-in-out">
              {content.place}
            </h1>
          </Link>
          <p className="text-xl font-[montserrat]">
            <span>{content.description.slice(0, 200) + "..."}</span>
          </p>
          <div>
            <button
              onClick={() => navigate(`contents/${content._id}`)}
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

export default ContentCard;