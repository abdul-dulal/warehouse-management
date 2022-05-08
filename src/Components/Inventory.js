import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import Stock from "./Stock";
const Inventory = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const [stock, setStock] = useState();

  useEffect(() => {
    const url = `http://localhost:4000/product/${id}`;
    axios.get(url).then((res) => setSingleProduct(res.data));
  }, [id]);

  let { quantity } = singleProduct;

  // delivered product
  const handleDeliverd = () => {
    const newQuantity = quantity - 1;
    const updateQuantity = { ...singleProduct, quantity: newQuantity };
    setSingleProduct(updateQuantity);
    const url = `http://localhost:4000/product/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    });
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="max-w-sm my-8  bg-[#111827] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg" src={singleProduct.img} alt="" />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              {singleProduct.name}
            </h5>

            <div className=" text-[#9CA3AF] text-xl">
              <p className="mb-3 font-normal  dark:text-gray-400">
                {singleProduct.description}
              </p>
              <p>Price : ${singleProduct.price}</p>
              <p className="my-3">Quantity : {singleProduct.quantity}</p>
            </div>
            <div className="flex ">
              <button
                disabled={singleProduct.quantity === 0}
                onClick={handleDeliverd}
                className="inline-flex items-center py-2 px-3 text-xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Delivered
              </button>

              <div className="ml-4 text-xl text-white py-2">
                {singleProduct.quantity === 0 ? <Stock /> : "Sold"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
