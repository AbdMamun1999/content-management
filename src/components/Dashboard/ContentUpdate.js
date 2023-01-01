import React from "react";
import { useDispatch } from "react-redux";
import { openUpdatePage } from "../../redux/actions/contentActions";

const ContentUpdate = ({ updatePage }) => {
  const dispatch = useDispatch();

  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        id="staticModal"
        data-modal-backdrop="static"
        tabindex="-1"
        aria-hidden="true"
        class={`fixed top-0 left-0 right-0 z-50 ${
          updatePage ? "block" : "hidden"
        } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex justify-center items-center`}
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 py-3">
            <hr />
            <div className="px-10">
              <div className="flex flex-row justify-between">
                <div>
                  <label htmlFor="name">Name</label>
                  <br />
                  <input type="text" name="name" className="rounded" />
                </div>
                <div>
                  <label htmlFor="name">Name</label>
                  <br />
                  <input type="text" name="" className="rounded" />
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <label htmlFor="name">Name</label>
                  <br />
                  <input type="text" name="name" className="rounded" />
                </div>
                <div>
                  <label htmlFor="name">Name</label>
                  <br />
                  <input type="text" name="" className="rounded" />
                </div>
              </div>
              <div>
                <label htmlFor="description">Content Eescription</label>
                <br />
                <textarea rows="" cols="" className="w-full rounded"></textarea>
              </div>

              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>

            <hr />
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-toggle="staticModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                onClick={() => dispatch(openUpdatePage(false))}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                data-modal-toggle="staticModal"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentUpdate;
