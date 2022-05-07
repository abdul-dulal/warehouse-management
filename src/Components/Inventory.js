import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Inventory = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const [stock, setStock] = useState();
  const navigate = useNavigate();
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
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      });
  };

  // addProduct
  const handleStock = (event) => {
    event.preventDefault();
    const number = parseInt(event.target.number.value);

    const newNumber = quantity + number;
    const updateNumber = { ...singleProduct, number: newNumber };
    setSingleProduct(updateNumber);
    const url = `http://localhost:4000/user/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateNumber),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      });
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center my-3 text-white">Manage Inventory</h1>
        <button
          onClick={() => navigate("/manageitem")}
          className="border-solid block border-2 border-sky-500 text-white text-xl m-auto px-4 py-3 "
        >
          Add New Item
        </button>

        <form onSubmit={handleStock}>
          <div className="mb-6">
            <label className="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300">
              Add Stock
            </label>
            <input
              type="number"
              name="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Something"
              required
            />
          </div>
          <input
            type="submit"
            value="Stock"
            className="border px-12 py-2 bg cursor-pointer"
          />
        </form>

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
                onClick={handleDeliverd}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Delivered
              </button>
              <Link
                to={"/manageitem"}
                className="inline-flex  ml-6 items-center py-4 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Manage Inventory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
