import React from "react";

const ManageInv = ({ product, handleDelete }) => {
  const { name, price, quantity, supplier, _id } = product;

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-4  w-1/5 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {name}
              </th>
              <td className=" px-6 py-3 w-1/5">${price}</td>
              <td className="px-6 py-3 w-1/5">{quantity}</td>
              <td className="px-6 py-3 w-1/5">{supplier}</td>
              <td className="px-6 py-4 text-right w-1/5">
                <button
                  className="text-3xl text-blue-600  "
                  onClick={() => handleDelete(_id)}
                >
                  <ion-icon name="trash" className=" "></ion-icon>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageInv;
