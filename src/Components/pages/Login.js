import React from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase.init";
import axios from "axios";
import SocialLogin from "../SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();

  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let email;

  const handleLogin = async (event) => {
    event.preventDefault();
    email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      `https://vast-forest-98609.herokuapp.com/login`,
      { email }
    );
    localStorage.setItem("accessToken", data);
  };
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger"> {error?.message}</p>
      </div>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const resetPassword = async () => {
    await sendPasswordResetEmail(email);
    toast("reset password send");
  };

  return (
    <div className="container mx-auto">
      <div className="p-4 max-w-sm #1F2937 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleLogin}>
          <h5 className="text-xl font-medium text-white ">
            Sign in to our platform
          </h5>
          <div>
            <label className="block mb-2 text-xl font-medium text-[#CBCDD6]">
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
            <label className="block mb-2 text-xl font-medium text-[#CBCDD6] dark:text-gray-300">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <p>{errorElement}</p>
          <div className="flex items-start">
            <button
              onClick={resetPassword}
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>

          <SocialLogin />
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?
            <Link
              to="/signup"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
        <p className="text-red-600">{errorElement}</p>
      </div>
    </div>
  );
};

export default Login;
