import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getContentsLoad from "../../redux/thunk/content/getContents";

import SingleContent from "./SingleContent";

const ContentList = () => {
  const contents = useSelector((state) => state.contents.contents);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContentsLoad());
  }, []);

  return (
    <div className="w-full overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-left font-semibold text-white text-xl">
        <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6"></th>
            <th scope="col" className="py-3 px-6">
              Product name
            </th>
            <th scope="col" className="py-3 px-6">
              Color
            </th>
            <th scope="col" className="py-3 px-6">
              Category
            </th>
            <th scope="col" className="py-3 px-6"></th>
            <th scope="col" className="py-3 px-6">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <SingleContent key={content._id} content={content} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentList;
