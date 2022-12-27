import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import deleteContentById from "../../redux/thunk/content/deleteContent";
import {
  openDeleteModal,
  openUpdatePage,
} from "../../redux/actions/contentActions";
import DeleteModal from "../Genaral/DeleteModal";
import ContentUpdate from "./ContentUpdate";

const SingleContent = ({ content }) => {
  const deleteContent = useSelector((state) => state.contents.deleteContent);
  const updatePage = useSelector((state) => state.contents.updatePage);
  const dispatch = useDispatch();

  return (
    <>
      <tr
        key={content._id}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <td className="py-4 px-6">
          <input type="checkbox" name="" />
        </td>
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {content.place}
        </th>
        <td className="py-4 px-6">Sliver</td>
        <td className="py-4 px-6">Laptop</td>
        <td className="py-4 px-6">
          <button
            onClick={() => dispatch(openUpdatePage(true))}
            className="text-white flex items-center bg-[#2563eb]  rounded px-2 py-1 font-semibold text-sm"
            data-modal-toggle="staticModal"
          >
            <span>
              <FaEdit />
            </span>
            <span>Edit</span>
          </button>
        </td>
        <td className="py-4 px-6 text-right">
          <button
            onClick={() => dispatch(openDeleteModal(true))}
            data-modal-toggle="popup-modal"
            className="flex items-center bg-[#c81e1e] rounded px-2 py-1 font-semibold"
          >
            <span>
              <MdDelete />
            </span>
            <span>Delete item</span>
          </button>
        </td>
      </tr>
      {updatePage && (
        <ContentUpdate updatePage={updatePage} content={content} />
      )}
      {deleteContent && (
        <DeleteModal deleteContent={deleteContent} content={content} />
      )}
    </>
  );
};

export default SingleContent;
