import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import createContentData from "../../redux/thunk/content/createContent";

const AddContent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const imageStorageKey = "f8d9e42d9dde1a0878f7db67a9615fcd";

  const onSubmit = (data) => {
    const img = data.avatar[0];
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
            place: data.name,
            img: img,
            description: data.description,
          };
          dispatch(createContentData(content));
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[80%] lg:w-[40%] mx-auto lg:ml-5 lg:mt-5"
    >
      <div>
        <div className="flex justify-between flex-col md:flex-row items-center gap-y-5 gap-x-2">
          <div className="w-full">
            <label
              htmlFor="name"
              className="form-label inline-block mb-2 text-gray-700 font-[montserrat] font-semibold"
            >
              Content Name
            </label>{" "}
            <br />
            <input
              {...register("name", { required: true })}
              className="w-full border-2 outline-none px-4 py-2 rounded font-[montserrat]"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="avatar"
              className="form-label inline-block mb-2 text-gray-700 font-[montserrat] font-semibold"
            >
              Upload Your Content Image
            </label>
            <input
              type="file"
              {...register("avatar", { required: true })}
              className="form-control blockw-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid  border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white  focus:outline-none font-[montserrat]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="form-label inline-block mb-2 text-gray-700 mt-5 font-[montserrat] font-semibold"
          >
            Content Description
          </label>
          <textarea
            {...register("description", { required: true })}
            className="block p-2.5 w-full text-sm  rounded-lg border border-gray-300  outline-none font-[montserrat]"
          ></textarea>
        </div>

        <div>
          <input
            type="submit"
            value="Submit"
            className=" px-3 py-1 uppercase font-semibold bg-[#34495e] text-white mt-5 rounded"
          />
        </div>
      </div>
    </form>
  );
};

export default AddContent;
