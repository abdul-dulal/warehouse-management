import axios from "axios";
import React, { useEffect, useState } from "react";

const useSingle = (id) => {
  const [singleProduct, setSingleProduct] = useState([]);
  useEffect(() => {
    const url = `http://localhost:4000/product/${id}`;
    axios.get(url).then((res) => setSingleProduct(res.data));
  }, [id]);
  return [singleProduct, setSingleProduct];
};

export default useSingle;
