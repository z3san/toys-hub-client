import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../Hook/useTitle";

const UpdateToy = () => {
  useTitle("Update Toys");
  const toy = useLoaderData();
  const { _id, price, available_quantity, toy_name, description } = toy[0];

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedToy = {
      price: form.price.value,
      quantity: form.quantity.value,
      description: form.description.value,
    };

    // Send data to the server
    fetch(`https://toys-hub-server-two.vercel.app/updatedToys/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          form.reset();
          Swal.fire({
            title: "Success!",
            text: "Toy updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="min-h-screen">
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
        className="min-h-screen"
      >
        <h1 className="text-3xl font-extrabold mb-8 text-center p-10 text-white">
          Update Toy: {toy_name}
        </h1>
        <form
          onSubmit={handleUpdateToy}
          className="max-w-md mx-auto bg-white rounded-lg shadow-lg px-8 pt-6 pb-8"
        >
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-lg font-medium text-gray-800"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              className="form-input mt-1 w-full rounded-full border-2 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-lg font-medium text-gray-800"
            >
              Quantity
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              className="form-input mt-1 w-full rounded-full border-2 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-800"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="form-input mt-1 w-full rounded-full border-2 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Update Toy
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
