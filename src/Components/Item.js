import React from "react";
import { useNavigate } from "react-router-dom";
const Item = ({ item }) => {
  console.log(item);
  const navigate = useNavigate();
  const { name, description, img, price, quantity, supplier, _id } = item;
  return (
    <div>
      <div className=" ">
        <div className="max-w-sm bg-[#111827] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={img} alt="" />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              {name}
            </h5>

            <div className=" text-[#9CA3AF] text-xl">
              <p className="mb-3 font-normal  dark:text-gray-400">
                {description}
              </p>
              <p>Price : ${price}</p>
              <p className="my-3">Quantity : {quantity}</p>
              <p> supplier : {supplier}</p>
            </div>
            <button
              onClick={() => navigate(`/inventory/${_id}`)}
              className="inline-flex items-center py-3 px-10 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
