import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from ".././Firebase.init";
const LogOut = () => {
  const [] = useAuthState(auth);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
  };

  return (
    <div>
      <button onClick={() => handleLogout()} className="text-white mt-2">
        SignOut
      </button>
    </div>
  );
};

export default LogOut;
