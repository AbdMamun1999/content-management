import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadTravelData from "../../redux/thunk/travel/fetchTravel";
import { MdDelete } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductList = () => {
  const travels = useSelector((state) => state.travel.travels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTravelData());
  }, []);

  return (
    <div class="flex flex-col justify-center items-center h-full w-full">
      <div class="py-2 inline-block w-[100%] sm:px-6 lg:px-8">
        <table class="min-w-[100%] border-2">
          <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th>
                <h6 className="text-center ">Sl no</h6>
              </th>
              <th class="p-2 ">
                <h6 class="font-semibold text-center">Place Name</h6>
              </th>
              <th class="p-2 ">
                <h6 class="font-semibold text-center">Date</h6>
              </th>

              <th class="p-2 ">
                <h6 class="font-semibold text-center">Delete</h6>
              </th>
              <th class="p-2 ">
                <h6 class="font-semibold text-center"></h6>
              </th>
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-gray-100">
            {travels.map((travel, index) => (
              <tr key={travel._id}>
                <td class="p-2">
                  <p className="text-center text-[18px]">{index + 1}</p>
                </td>
                <td class="p-2">
                  <h6 className="text-center text-[18px]">{travel.place}</h6>
                </td>
                <td class="p-2">
                  <p className="text-center text-[18px]">20/20/2022</p>
                </td>
                <td class="p-2 text-center ">
                  <button>
                    <MdDelete size={25} color="#DC3535" />
                  </button>
                </td>
                <td class="p-2 ">
                  <p className="text-center font-bold hover:text-[#DC3535] duration-300 ease-in-out">
                    <Link
                      to={`/dashboard/product-update/${travel._id}`}
                      className="flex justify-center py-1"
                    >
                      <span>Edit </span>
                      <span>
                        <FiArrowUpRight />
                      </span>
                    </Link>
                  </p>
                </td>
              </tr>
            ))}
            <tr class="bg-white border-b"></tr>
            <tr class="bg-white border-b"></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
