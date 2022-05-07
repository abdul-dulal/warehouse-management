import React, { useEffect, useState } from "react";
import auth from "../../Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import Item from "../Item";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
const Myitem = () => {
  const [myItem, setMyItem] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const email = user?.email;
    const item = async () => {
      const url = `http://localhost:4000/myitem?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyItem(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    item();
  }, [user]);

  return (
    <div className="container mx-auto">
      <h1>My Items </h1>
      <div>
        <h1>my item: {myItem.length}</h1>
      </div>
    </div>
  );
};

export default Myitem;
