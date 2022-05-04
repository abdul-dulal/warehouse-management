import React, { useEffect, useState } from "react";
import Product from "./Product";
const axios = require("axios");

const Products = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const url = `http://localhost:4000/product`;
    axios
      .get(url)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container mx-auto">
      <h3 className="text-center text-black text-2xl">LEGAL PRACTICE AREAS</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
