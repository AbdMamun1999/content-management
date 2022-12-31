import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getContentsLoad from "../../redux/thunk/content/getContents";
import ContentCard from "./ContentCard";

const Contents = () => {
  const contents = useSelector((state) => state.contents.contents);
  const size = useSelector((state) => state.pagination.size);
  const page = useSelector((state) => state.pagination.page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContentsLoad(page, size));
  }, [page]);



  return (
    <div className="mb-10 lg:col-span-2">
      {contents.map((content,index) => (
        <ContentCard key={content._id} content={content} index={index}/>
      ))}
    </div>
  );
};

export default Contents;
