import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const SingleToy = () => {
  const singleToy = useLoaderData();
  const { picture, toy_name, seller_name, seller_email, price, rating, available_quantity, description } = singleToy[0];

  return (
    <div className="flex flex-col items-center md:flex-row bg-white rounded-lg shadow-lg p-4">
      <div className="md:w-1/3">
        <img src={picture} alt={toy_name} className="w-full h-auto rounded-lg" />
      </div>
      <div className="md:w-2/3 ml-4">
        <div className="mb-4">
          <h2 className="text-3xl font-semibold">{toy_name}</h2>
          <div className="flex items-center mt-2">
            <p className="text-lg text-gray-900 mr-2">Ratings: {rating} </p>
            <Rating className='mr-3'
                  readonly
                  placeholderRating={rating}
                  emptySymbol={<FaRegStar />}
                  placeholderSymbol={<FaStar className="text-warning" />}
                  fullSymbol={<FaStar />}
                /> ||<p>1000 Reviews</p>
                
          </div>
          <p>Availability: <span className='text-green-500'>In Stock</span> </p>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-lg font-bold text-gray-900 mb-2">Price: {price}</p>
          <p className="text-lg text-gray-900 mb-2">Seller: {seller_name}</p>
          <p className="text-lg text-gray-900 mb-2">Email: {seller_email}</p>
          <p className="text-lg text-gray-900 mb-2">Available Quantity: {available_quantity}</p>
          <p className="text-lg text-gray-900 mb-2">Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
