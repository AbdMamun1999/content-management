import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getContentsLoad from "../../redux/thunk/content/getContents";
import ContentCard from "./ContentCard";

const Contents = () => {
  const contents = useSelector((state) => state.contents.contents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContentsLoad());
  }, []);

  return (
    <div className="mb-10">
      {contents.map((content) => (
        <ContentCard key={content._id} content={content}/>
      ))}
     
    </div>
  );
};

export default Contents;
