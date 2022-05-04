import axios from "axios";
import React, { useEffect, useState } from "react";

const useAllProduct = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const url = `http://localhost:4000/product`;
    axios
      .get(url)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, []);
  return [products, setProduct];
};

export default useAllProduct;
