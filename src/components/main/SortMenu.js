import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { firstUploads } from "../../redux/actions/filterActions";

const SortMenu = () => {
  const dispatch = useDispatch();
  const sorts = useSelector((state) => state.filter.sorts);
  console.log(sorts);
  return (
    <nav>
      <div>
        <h3 className="text-center font-[Montserrat] text-xl font-bold">
          Sort By
        </h3>
      </div>
      <ul className="flex flex-row justify-center gap-x-2">
        <li>
          {/* bg-[#9932cc] */}
          <button
            onClick={() => dispatch(firstUploads("first_upload"))}
            type="button"
            className={`${
              sorts.includes("first_upload") ? "bg-[#9932cc] text-white" : null
            } border-2 rounded-full px-3 py-2  font-[Montserrat] font-semibold text-black`}
          >
            Fast Upload
          </button>
        </li>
        <li>
          <button
            onClick={() => dispatch(firstUploads("last_upload"))}
            type="button"
            className={`${
              sorts.includes("last_upload") ? "bg-[#9932cc] text-white" : null
            }
            border-2 rounded-full px-3 py-2 font-[Montserrat] font-semibold text-black`}
          >
            Last upload
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SortMenu;
