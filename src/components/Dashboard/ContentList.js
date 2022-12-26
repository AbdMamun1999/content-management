import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getContentsLoad from "../../redux/thunk/content/getContents";
import { MdDelete } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import deleteContentById from "../../redux/thunk/content/deleteContent";

const ContentList = () => {
  const contents = useSelector((state) => state.contents.contents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContentsLoad());
  }, []);

  return (
    <div class="w-full overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Product name
            </th>
            <th scope="col" class="py-3 px-6">
              Color
            </th>
            <th scope="col" class="py-3 px-6">
              Category
            </th>
            <th scope="col" class="py-3 px-6">
              Price
            </th>
            <th scope="col" class="py-3 px-6">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {content.place}
              </th>
              <td class="py-4 px-6">Sliver</td>
              <td class="py-4 px-6">Laptop</td>
              <td class="py-4 px-6">$2999</td>
              <td class="py-4 px-6 text-right">
                <Link
                  to={ `/dashboard/contents/${content._id}`}
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
         
        </tbody>
      </table>
    </div>
  );
};

export default ContentList;
