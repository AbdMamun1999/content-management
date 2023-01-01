import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getContentsLoad from "../../redux/thunk/content/getContents";
import Pagination from "./Pagination";

import SingleContent from "./SingleContent";

const ContentList = () => {
  
  const contents = useSelector((state) => state.contents.contents);
  const page = useSelector((state) => state.pagination.page);
  const size = useSelector((state) => state.pagination.size);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContentsLoad(page, size));
  }, [page]);


 
  return (
    <div className="w-full overflow-x-auto relative shadow-md sm:rounded-lg ">
      <table className="w-full text-left font-semibold text-white text-xl mb-3">
        <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6"></th>
            <th scope="col" className="py-3 px-6">
              Product name
            </th>
            <th scope="col" className="py-3 px-6">
              Category
            </th>
            <th scope="col" className="py-3 px-6">
              Tags
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
      <Pagination />
    </div>
  );
};

export default ContentList;
