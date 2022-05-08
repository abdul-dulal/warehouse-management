import axios from "axios";
import React, { useEffect, useState } from "react";

const useAllProduct = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const url = `http://localhost:4000/product`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [products, setProduct];
};

export default useAllProduct;
