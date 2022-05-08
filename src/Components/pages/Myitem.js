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

  const email = user?.email;
  useEffect(() => {
    const item = async () => {
      const url = `https://vast-forest-98609.herokuapp.com/myitem?email=${email}`;
      console.log(url);
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyItem(data);
        console.log(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    item();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-white text-center my-5">My Items {myItem.length} </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {myItem.length >= 0 &&
          myItem.map((item) => <Item key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default Myitem;
