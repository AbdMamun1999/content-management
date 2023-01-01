import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/main/Navbar";
import { addHistory } from "../../redux/actions/historyActions";
import getContentById from "../../redux/thunk/content/getContentById";

const ContentDetails = () => {
  const { content_id } = useParams();
  const content = useSelector((state) => state.contents.content);
  const dispatch = useDispatch();
  const time = new Date().toLocaleTimeString();

  useEffect(() => {
    dispatch(getContentById(content_id));
    dispatch(addHistory({ content_id, time }));
  }, []);



  return (
    <div className="bg-[#f1f1f1]">
      <Navbar />
      <div className="sm:w-full md:w-[80%] lg:w-[50%] bg-white p-5 px-10 mx-auto mt-10">
        <div>
          <h1 className="text-center text-5xl font-semibold  font-[montserrat]">
            {content.place}
          </h1>
        </div>
        <div>
          <img src={content.img} alt="" className="mx-auto my-5" width="100%" />
        </div>
        <div>
          <p className="mt-5 text-[2016] font-[montserrat]">
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentDetails;
