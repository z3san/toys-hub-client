import React from 'react';

const TopProduct = () => {
    return (

<div>
<div className='text-center mb-5 mt-8'>
<h2 className="text-3xl font-bold ">Top Rated Products</h2>
      <p className="text-gray-500">OUR BEST PRODUCTS</p>
</div>
        <div className="md:flex  items-center mb-5">

    <div className="w-full sm:w-1/2 flex flex-col justify-between">
     
        {/* Top Rated products */}

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {/* Product Cards div */}
          <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex">
              <div className="w-1/3 sm:w-1/3">
                <img
                  src="https://m.media-amazon.com/images/I/51c8pq0GS0L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                  alt="Product 1"
                  className="rounded-l w-full"
                />
              </div>
              <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
                <h5 className=" font-bold mb-2 hover:underline">Robosapien Toy</h5>
                <div className="mb-2">
                  <div className="inline-block">
                    <span className="text-yellow-500 text-2xl">&#9734; &#9734; &#9734; &#9734; &#9734;</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm text-gray-500 mr-2 line-through hover:text-red-500 transition-colors">
                    $99.00 USD
                  </div>
                  <div className=" hover:text-green-500 text-sm  transition-colors">$79.00 USD</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex">
              <div className="w-1/3 sm:w-1/3">
                <img
                  src="https://m.media-amazon.com/images/I/81NatkvAvpL._AC_SL1500_.jpg"
                  alt="Product 1"
                  className="rounded-l w-full"
                />
              </div>
              <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
                <h5 className=" font-bold mb-2 hover:underline">Magic Science Kit</h5>
                <div className="mb-2">
                  <div className="inline-block">
                    <span className="text-yellow-500 text-2xl">&#9734; &#9734; &#9734; &#9734; &#9734;</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm text-gray-500 mr-2 line-through hover:text-red-500 transition-colors">
                    $89.00 USD
                  </div>
                  <div className=" hover:text-green-500 text-sm  transition-colors">$52.00 USD</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex">
              <div className="w-1/3 sm:w-1/3">
                <img
                  src="https://m.media-amazon.com/images/I/91AQBSotB2L._AC_SL1500_.jpg"
                  alt="Product 1"
                  className="rounded-l w-full"
                />
              </div>
              <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
                <h5 className=" font-bold mb-2 hover:underline">Earth Science Kit</h5>
                <div className="mb-2">
                  <div className="inline-block">
                    <span className="text-yellow-500 text-2xl">&#9734; &#9734; &#9734; &#9734; &#9734;</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm text-gray-500 mr-2 line-through hover:text-red-500 transition-colors">
                    $78.00 USD
                  </div>
                  <div className=" hover:text-green-500 text-sm  transition-colors">$39.00 USD</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex">
              <div className="w-1/3 sm:w-1/3">
                <img
                  src="https://m.media-amazon.com/images/I/719tmroGknL._AC_SL1500_.jpg"
                  alt="Product 1"
                  className="rounded-l w-full"
                />
              </div>
              <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
                <h5 className=" font-bold mb-2 hover:underline">Drill Robot</h5>
                <div className="mb-2">
                  <div className="inline-block">
                    <span className="text-yellow-500 text-2xl">&#9734; &#9734; &#9734; &#9734; &#9734;</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm text-gray-500 mr-2 line-through hover:text-red-500 transition-colors">
                    $59.00 USD
                  </div>
                  <div className=" hover:text-green-500 text-sm  transition-colors">$98.00 USD</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex">
              <div className="w-1/3 sm:w-1/3">
                <img
                  src="https://m.media-amazon.com/images/I/81ko3tEcuVL._AC_SL1500_.jpg"
                  alt="Product 1"
                  className="rounded-l w-full"
                />
              </div>
              <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
                <h5 className=" font-bold mb-2 hover:underline">Mechanical Robot</h5>
                <div className="mb-2">
                  <div className="inline-block">
                    <span className="text-yellow-500 text-2xl">&#9734; &#9734; &#9734; &#9734; &#9734;</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm text-gray-500 mr-2 line-through hover:text-red-500 transition-colors">
                    $38.00 USD
                  </div>
                  <div className=" hover:text-green-500 text-sm  transition-colors">$22.00 USD</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex">
              <div className="w-1/3 sm:w-1/3">
                <img
                  src="https://m.media-amazon.com/images/I/81tA0xqlnCL._AC_SL1500_.jpg"
                  alt="Product 1"
                  className="rounded-l w-full"
                />
              </div>
              <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
                <h5 className=" font-bold mb-2 hover:underline">Engino- STEM Toys</h5>
                <div className="mb-2">
                  <div className="inline-block">
                    <span className="text-yellow-500 text-2xl">&#9734; &#9734; &#9734; &#9734; &#9734;</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm text-gray-500 mr-2 line-through hover:text-red-500 transition-colors">
                    $69.00 USD
                  </div>
                  <div className=" hover:text-green-500 text-sm  transition-colors">$55.00 USD</div>
                </div>
              </div>
            </div>
          </div>

         
        
      </div>
    </div>
    <div className="w-full sm:w-1/2  flex justify-center items-center overflow-hidden">
      {/* image div */}
      <img
        src="https://i.ibb.co/1b1bWSx/Untitled-1-e033abd9-8404-4146-a296-1e9f27b0a602-grande.png"
        alt="Image"
        className="flex-shrink-0 rounded-md"

      />
    </div>
  </div>
</div>
    );
};

export default TopProduct;