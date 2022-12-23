import React from "react";

const ProductList = () => {
  return (
    <div class="flex flex-col justify-center items-center h-full w-full">
      <div class="py-2 inline-block w-[100%] sm:px-6 lg:px-8">
        <table class="min-w-[100%] border-2">
          <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th></th>
              <th class="p-2">
                <div class="font-semibold text-left">Product Name</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-left">Brand</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-left">In Stock</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-left">Price</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">Action</div>
              </th>
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-gray-100">
            <tr>
              <td class="p-2">1</td>
              <td class="p-2">1</td>
              <td class="p-2">1</td>
              <td class="p-2">1</td>
              <td class="p-2">1</td>
              <td class="p-2">1</td>
            </tr>
            <tr class="bg-white border-b">
              
            </tr>
            <tr class="bg-white border-b">
             
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
