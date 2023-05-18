import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if(password <6 ){
      setError("Password should be at least 6 characters");
      return;
    }

   
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        form.reset();
        setError("")
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
    <div className="my-container">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                required
                placeholder="Enter url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                className="input input-bordered"
              />
              <label className="label">
                <div className="label-text-alt">
                  Already have an account?{" "}
                  <Link className="link" to="/login">
                    Login
                  </Link>
                  <p className="text-red-500">{error}</p>
                </div>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;