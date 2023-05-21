import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../../Providers/AuthProvider";

import regAnim from "../../../assets/regAnim.json";
import useTitle from "../../../../Hook/useTitle";

const Register = () => {
  useTitle("Register");
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        if(createUser){
            
         <Lottie animationData={regAnim} loop={true} />
      }
        form.reset();
        setError("");
        updateUserData(result.user, name, photo);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("updated profile");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 to-blue-300">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-4xl p-4 bg-white rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Lottie className="max-w-full" animationData={regAnim} />
        </div>
        <div className="w-full md:w-1/2 max-w-md">
          <div className="w-full max-w-sm p-4">
            <h2 className="text-3xl font-bold text-center text-purple-600">Register</h2>
            <form className="mt-6" onSubmit={handleRegister}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-600">
                  Photo URL
                </label>
                <input
                  name="photo"
                  type="text"
                  id="photo"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter photo URL"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Register
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-purple-500 hover:text-purple-600">
                  Login here
                </Link>
              </p>
              <p className="text-red-500">{error}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
