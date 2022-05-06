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
      <h1 className="text-center my-3">
        <span className="text-orange-600">Add</span> Item
      </h1>

      <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleAdditem}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>

          <div>
            <input
              type="text"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter Title"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              placeholder="Enter description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div>
            <input
              type="number"
              name="price"
              placeholder="Enter Price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="photo"
              placeholder="Enter Photo Url"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="quantity"
              placeholder="Enter Quantity"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="supplier"
              placeholder="Enter supplier"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <input
            type="submit"
            value="addItem"
            className="border px-4 py-2 bg-slate-500 text-white"
          />
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddItem;
