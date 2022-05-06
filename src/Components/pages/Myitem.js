import React, { useState } from "react";
import auth from "../../Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const Myitem = () => {
  const [wonProduct, setWonProduct] = useState([]);
  const [user] = useAuthState(auth);
  const ulr = ``;
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Myitem;
