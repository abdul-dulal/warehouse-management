import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../src/Firebase.init";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Loading from "../Loading";
import axios from "axios";
import SocialLogin from "../SocialLogin";
const Signup = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();
  let errorElement;
  const handleSignup = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);

    const { data } = await axios.post(
      `https://vast-forest-98609.herokuapp.com/login`,
      { email }
    );

    localStorage.setItem("accessToken", data);
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (user) {
    navigate("/home");
    toast("login success ");
  }
  return (
    <div className="container mx-auto grid grid-cols-2 my-7">
      <div className="p-4 max-w-sm bg-[#1F2937] rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSignup}>
          <h5 className="text-xl font-medium text-[#CBCDD6] dark:text-white">
            SignUp Our platform
          </h5>
          <div>
            <label className="block mb-2 text-xl font-medium text-[#CBCDD6] dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-50 border border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-2 text-xl font-medium text-[#CBCDD6]  dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2  font-medium text-[#CBCDD6]  text-xl dark:text-gray-300">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  onClick={() => setAgree(!agree)}
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                className={`ml-2 text-sm font-medium  ${
                  agree ? "text-[#CBCDD6]" : "text-red-700	"
                }`}
              >
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={!agree}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <SocialLogin />

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Have alreay an account
            <Link
              to="/login"
              className="text-blue-700 hover:underline dark:text-blue-500 ml-2"
            >
              Login
            </Link>
          </div>
        </form>

        <p className="text-red-700">{errorElement}</p>
      </div>
    </div>
  );
};

export default Signup;
