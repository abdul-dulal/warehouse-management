import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAllProduct from "./Hooks/useAllProduct";
import ManageInv from "./ManageInv";

const ManageInventory = () => {
  const [products, setProduct] = useAllProduct();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const procssed = window.confirm("are you sure to delete");
    if (procssed) {
      const url = `http://localhost:4000/delete/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const rest = products.filter((product) => product._id !== id);
            setProduct(rest);
          }
        });
    }
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-center my-3 text-white">Manage Inventory</h1>
      <button
        // to={"/additem"}
        onClick={() => navigate("/additem")}
        className="border-solid no-underline  mx-auto  border-2 block border-sky-500 text-white text-xl m-auto px-4 py-3 my-12 "
      >
        <span className="flex center">Add New Item</span>
      </button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10 ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-[#1F2937] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className=" text-xl px-6 py-3 w-1/5 text-white">
                Product
              </th>
              <th scope="col" className=" text-xl px-6 py-3 w-1/5 text-white">
                Price
              </th>
              <th scope="col" className=" text-xl px-6 py-3 w-1/5 text-white">
                Quantity
              </th>
              <th scope="col" className=" text-xl px-6 py-3 w-1/5 text-white">
                Supplier
              </th>
              <th scope="col" className="px-6 py-3 ">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      {products.map((product) => (
        <ManageInv
          key={product._id}
          product={product}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ManageInventory;
