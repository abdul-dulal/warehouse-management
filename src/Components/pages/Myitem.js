import React, { useEffect, useState } from "react";
import auth from "../../Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
const Myitem = () => {
  const [myItem, setMyItem] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const email = user?.email;
    const getOrder = async () => {
      const url = `http://localhost:4000/myitem?email=${email}`;
      const { data } = await axios.get(url);
      setMyItem(data);
    };
    getOrder();
  }, [user]);

  return (
    <div>
      <h1>hello {myItem.length}</h1>
    </div>
  );
};

export default Myitem;
