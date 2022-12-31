import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentPage,
  nextPage,
  previousPage,
} from "../../redux/actions/paginationActions";

const Pagination = () => {
  const totalContent = useSelector((state) => state.contents.count);
  const totalPage = Math.ceil(totalContent / 5);

  const dispatch = useDispatch();

  return (
    <nav
      className="flex justify-center items-center mb-14"
      aria-label="Page navigation example"
    >
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            onClick={() => dispatch(previousPage())}
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </button>
        </li>
        {totalContent &&
          [...Array(totalPage).keys()].map((page) => (
            <li key={page}>
              <button
                onClick={() => dispatch(currentPage(page))}
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {page + 1}
              </button>
            </li>
          ))}

        <li>
          <button
            onClick={() => dispatch(nextPage())}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
