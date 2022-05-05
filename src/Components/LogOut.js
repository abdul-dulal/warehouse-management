import React from "react";
import { signOut } from "firebase/auth";
import auth from "../Firebase.init";
const LogOut = () => {
  return (
    <div>
      <button onClick={() => signOut(auth)} className="text-white mt-2">
        SignOut
      </button>
    </div>
  );
};

export default LogOut;
