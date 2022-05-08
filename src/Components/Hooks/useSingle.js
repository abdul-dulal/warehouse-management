import axios from "axios";
import React, { useEffect, useState } from "react";

const useSingle = (id) => {
  const [singleProduct, setSingleProduct] = useState([]);
  useEffect(() => {
    const url = `https://vast-forest-98609.herokuapp.com/product/${id}`;
    axios.get(url).then((res) => setSingleProduct(res.data));
  }, [id]);
  return [singleProduct, setSingleProduct];
};

export default useSingle;
