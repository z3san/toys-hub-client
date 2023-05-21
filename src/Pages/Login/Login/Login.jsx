import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginAnim from "../../../assets/loginAnim.json";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import lazyAnim from "../../../assets/lazyAnim.json"
import LazyLoad from "react-lazy-load";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedIn = result.user;
        console.log(loggedIn);
        navigate(from, { replace: true });
        form.reset();
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedIn = result.user;
        console.log(loggedIn);
        navigate(from, { replace: true });
        form.reset();
        setError("");
      })
      .catch((error) => setError(error.message));
  };

  const {loading} = useContext(AuthContext)
if(loading){
  return <div className='h-screen bg-white'>
      <LazyLoad className="flex justify-center items-center h-full" height={762}>
      <Lottie animationData={lazyAnim} ></Lottie>
      </LazyLoad>
  </div>
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 to-blue-300">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-4xl p-4 bg-white rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Lottie className="max-w-full" animationData={loginAnim} loop={false} />
        </div>
        <div className="w-full md:w-1/2 max-w-md">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">ToysHub Login</h2>
          <form onSubmit={handleLogin} className="w-full">
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
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
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-purple-500 hover:text-purple-600">
                Register
              </Link>
            </p>
            <p className="text-red-500">{error}</p>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline my-2 w-full flex items-center justify-center"
            >
              <FaGoogle className="mr-2 text-blue-500" /> Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
