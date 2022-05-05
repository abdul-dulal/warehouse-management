import React from "react";
import useAllProduct from "./Hooks/useAllProduct";
import ManageInv from "./ManageInv";

const ManageInventory = () => {
  const [products, setProduct] = useAllProduct();
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 w-1/5">
                Product
              </th>
              <th scope="col" className="px-6 py-3 w-1/5">
                Price
              </th>
              <th scope="col" className="px-6 py-3 w-1/5">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 w-1/5">
                Supplier
              </th>
              <th scope="col" className="px-6 py-3">
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
