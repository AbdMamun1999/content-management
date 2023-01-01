import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getContentsLoad from "../../redux/thunk/content/getContents";
import ContentCard from "./ContentCard";

const Contents = () => {
  const [visible, setVisible] = useState(5);
  const contents = useSelector((state) => state.contents.contents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContentsLoad());
  }, []);

  const showMoreItem = () => {
    setVisible((previous) => previous + 3);
  };

  return (
    <div className="mb-10 lg:col-span-2">
      {contents.slice(0, visible).map((content, index) => (
        <ContentCard key={content._id} content={content} index={index} />
      ))}
      <button onClick={() => showMoreItem()} type="buttn">
        Load More
      </button>
    </div>
  );
};

export default Contents;
