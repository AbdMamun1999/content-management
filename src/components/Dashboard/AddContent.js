import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import createContentData from "../../redux/thunk/content/createContent";
import { createContentDate } from "../../redux/actions/contentActions";
// date
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddContent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const isUpload = useSelector((state) => state.contents.isUpload);

  const imageStorageKey = "f8d9e42d9dde1a0878f7db67a9615fcd";

  const onSubmit = (data) => {
    const day = startDate.toDateString();
    const now = startDate.toLocaleTimeString();
    const time = day + now;

    const { tags } = data;
    const tagEle = tags.split(",");

    const img = data.img[0];
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const content = {
            ...data,
            img,
            date: time,
            tags: tagEle,
          };
          dispatch(createContentData(content));
          toast("Successfully Uploaded");
        }
      });
  };

  // if (isUpload) {

  // }

  return (
    <div className="w-full px-12 py-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-row justify-between">
          <div>
            <h1 className="text-3xl font-[Montserrat] font-bold">
              Edit Product
            </h1>
          </div>
          <div>
            <div>
              <button
                type="submit"
                className="border-2 px-3 rounded font-semibold font-[Montserrat]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3  gap-x-8 mt-5">
          <div className="col-span-2">
            <div className="bg-white px-8 py-8">
              <h3 className="text-2xl font-[Montserrat] font-semibold mb-3">
                Basic Information
              </h3>
              <div>
                <label
                  className="block text-gray-700 text-xl font-semibold mb-1 font-[Montserrat]"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:shadow-xl focus:outline-none"
                  placeholder="Enter Title"
                />
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block text-gray-700 text-xl font-semibold mb-1 font-[Montserrat] mt-5"
                >
                  Photo
                </label>

                <input
                  {...register("img", { required: true })}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:shadow-xl focus:outline-none"
                  type="file"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-gray-700 text-xl font-semibold mb-1 font-[Montserrat] mt-5"
                >
                  Description
                </label>

                <textarea
                  type="text"
                  {...register("description", { required: true })}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:shadow-xl focus:outline-none"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-gray-700 text-xl font-semibold mb-1 font-[Montserrat] mt-5"
                >
                  Short Description
                </label>

                <textarea
                  type="text"
                  {...register("short_description", { required: true })}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:shadow-xl focus:outline-none"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white px-8 py-8">
              <div>
                <h3 className="text-2xl font-[Montserrat] font-semibold mb-1">
                  Publish Date
                </h3>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="border-2 outline-none"
                />
              </div>
              <div>
                <h3 className="text-2xl font-[Montserrat] font-semibold mb-1 mt-5">
                  Categories
                </h3>
                <input
                  type="text"
                  {...register("categories", { required: true })}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:shadow-xl focus:outline-none"
                />
              </div>
            </div>
            <div>
              <div className="bg-white px-8 py-8 mt-5">
                <h3 className="text-2xl font-[Montserrat] font-semibold mb-1">
                  Tags
                </h3>
                <input
                  type="text"
                  {...register("tags", { required: true })}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:shadow-xl focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      {<ToastContainer />}
    </div>
  );
};

export default AddContent;
