import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({toy, handleViewDetails}) => {
    return (
        <tr  className="hover:bg-gray-100">
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
    );
};

export default AllToysRow;