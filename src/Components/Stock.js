import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useSingle from "./Hooks/useSingle";

const Stock = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useSingle(id);
  let { quantity } = singleProduct;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleStock = (event) => {
    event.preventDefault();

    const number = parseInt(event.target.number?.value);

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
    });
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log("success", data);
    // });
  };
  return (
    <div>
      <button onClick={handleShow} className="text-white border-2 px-4 py-2">
        Stock Now
      </button>
      <Modal show={show} className="">
        <Modal.Header className="bg-[#111827]">
          <Modal.Title className="text-white"> Add Stock</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-[#111827]">
          <form onSubmit={handleStock}>
            <div className="mb-6">
              {/* <label className="block mb-2 text-2xl font-medium bg-[#111827] text-white dark:text-gray-300">
                Stock Product
              </label> */}
              <input
                type="number"
                name="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Quantity"
                required
              />
            </div>
            <input
              type="submit"
              value="ReStock"
              className="border-2 text-xl  px-12 py-2 bg cursor-pointer  text-white "
            />
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-[#111827]">
          <Button onClick={handleClose} className="text-xl px-5 py-2 ">
            <span className="text-xl ">Close</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Stock;