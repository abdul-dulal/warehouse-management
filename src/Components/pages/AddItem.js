import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import axios from "axios";
const AddItem = () => {
  const [user] = useAuthState(auth);
  const handleAdditem = (event) => {
    event.preventDefault();
    const items = {
      name: event.target.title.value,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      supplier: event.target.supplier.value,
      img: event.target.photo.value,
      email: user.email,
    };
    console.log(items);
    axios.post(`http://localhost:4000/additem`, items).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast("your order is booked");
        event.target.reset();
      }
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center my-3 text-[#CBCDD6]">
        <span className="text-white">Add</span> Item
      </h1>

      <div className="p-4 max-w-sm bg-[#1F2937]rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleAdditem}>
          <h5 className="text-xl font-medium text-[#CBCDD6] dark:text-white">
            Add Product
          </h5>

          <div>
            <input
              type="text"
              name="title"
              className="bg-gray-50 border border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter Title"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              placeholder="Enter description"
              className="bg-gray-50 border border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div>
            <input
              type="number"
              name="price"
              placeholder="Enter Price"
              className="bg-gray-50 border border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="photo"
              placeholder="Enter Photo Url"
              className="bg-gray-50 border border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="quantity"
              placeholder="Enter Quantity"
              className="bg-gray-50 border border-gray-300 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="supplier"
              placeholder="Enter supplier"
              className="bg-gray-50 border border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <input
            type="submit"
            value="AddItem"
            className="py-2.5 px-5 mr-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gr "
          />
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddItem;
