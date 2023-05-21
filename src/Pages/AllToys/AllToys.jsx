import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://toys-hub-server-two.vercel.app/allToys');
        const data = await response.json();
        setToys(data);
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
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
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-6 font-semibold text-sm text-gray-700">Seller</th>
              <th className="py-3 px-6 font-semibold text-sm text-gray-700">Toy Name</th>
              <th className="py-3 px-6 font-semibold text-sm text-gray-700">Sub Category</th>
              <th className="py-3 px-6 font-semibold text-sm text-gray-700">Price</th>
              <th className="py-3 px-6 font-semibold text-sm text-gray-700">Available Quantity</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <tr key={toy._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 md:py-4 md:px-6 border-b border-gray-300">{toy.seller_name}</td>
                <td className="py-2 px-4 md:py-4 md:px-6 border-b border-gray-300">{toy.toy_name}</td>
                <td className="py-2 px-4 md:py-4 md:px-6 border-b border-gray-300">{toy.category}</td>
                <td className="py-2 px-4 md:py-4 md:px-6 border-b border-gray-300">{toy.price}</td>
                <td className="py-2 px-4 md:py-4 md:px-6 border-b border-gray-300">{toy.available_quantity}</td>
                <td className="py-2 px-4 md:py-4 md:px-6 border-b border-gray-300">
                <Link to={`/singleToy/${toy._id}`}>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
                    onClick={() => handleViewDetails(toy._id)}
                  >
                    View Details
                  </button>
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
