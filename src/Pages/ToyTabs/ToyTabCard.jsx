import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { BsCartPlus } from "react-icons/bs";

const ToyTabCard = ({ toy }) => {
  const { picture, price, rating, toy_name, _id } = toy;

  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img className="w-full h-64 object-cover" src={picture} alt={toy_name} />
        <div className="absolute top-2 right-2">
          <span className="inline-flex items-center px-2 py-1 bg-blue-500 rounded-md text-white">
            ${price}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">{toy_name}</h2>
        <div className="flex items-center mb-2">
          <Rating
            readonly
            placeholderRating={rating}
            emptySymbol={<FaRegStar className="text-yellow-500" />}
            placeholderSymbol={<FaStar className="text-yellow-500" />}
            fullSymbol={<FaStar className="text-yellow-500" />}
          />
          <span className="text-gray-700 ml-2">{rating}</span>
        </div>
        <div className="flex justify-between">
          <Link
            to={`/singleToy/${_id}`}
            className="text-lg text-gray-600 hover:text-blue-800 transition-colors duration-300 ease-in-out"
          >
            View Details
          </Link>
          <BsCartPlus title='Add to cart' className="text-3xl cursor-pointer hover:text-green-800  ">
            
          </BsCartPlus>
        </div>
      </div>
    </div>
  );
};

export default ToyTabCard;
