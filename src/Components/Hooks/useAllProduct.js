import axios from "axios";
import React, { useEffect, useState } from "react";

const useAllProduct = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const url = `https://vast-forest-98609.herokuapp.com/product`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [products, setProduct];
};

export default useAllProduct;
