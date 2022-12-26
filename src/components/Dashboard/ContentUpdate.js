import React from "react";
import { useParams } from "react-router-dom";

const ContentUpdate = () => {
  const { contentId } = useParams();
  return (
    <div>
      <h1>Content Update</h1>
    </div>
  );
};

export default ContentUpdate;
