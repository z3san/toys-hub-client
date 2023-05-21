import React, { useEffect, useState } from "react";

import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const filteredResult = toys.filter((toy) => {
      const toyName = toy.toy_name || "";
      const query = searchQuery || "";
      return toyName.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredToys(filteredResult);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://toys-hub-server-two.vercel.app/allToys"
        );
        const data = await response.json();
        setToys(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

 

  const handleViewDetails = (toyId) => {
    console.log(`View details for toy ID: ${toyId}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">All Toys</h1>

      <div className="flex gap-2 mb-5">
        {" "}
        <input
          value={searchQuery}
          onChange={handleSearchInput}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />{" "}
        <button onClick={handleSearch} className="btn btn-primary">Search</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-6 font-semibold text-sm text-gray-700">
                Seller
              </th>
              <th className="py-3 px-6 font-semibold text-sm text-gray-700">
                Toy Name
              </th>
              <th className="py-3 px-6 font-semibold text-sm text-gray-700">
                Sub Category
              </th>
              <th className="py-3 px-6 font-semibold text-sm text-gray-700">
                Price
              </th>
              <th className="py-3 px-6 font-semibold text-sm text-gray-700">
                Available Quantity
              </th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {searchQuery && filteredToys.length > 0
              ? filteredToys.map((toy) => (
                  <AllToysRow
                    key={toy._id}
                    handleViewDetails={handleViewDetails}
                    toy={toy}
                  ></AllToysRow>
                ))
              : toys.map((toy) => (
                  <AllToysRow
                    key={toy._id}
                    handleViewDetails={handleViewDetails}
                    toy={toy}
                  ></AllToysRow>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
