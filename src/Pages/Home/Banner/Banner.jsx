import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="relative h-screen overflow-hidden"
      style={{
         backgroundImage: `url('https://i.ibb.co/L0JKZ9X/banner.jpg')` ,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1
          className="text-4xl font-bold text-blue-600 mb-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Welcome to ToysHub
        </h1>
        <p
          className="text-lg text-blue-500 mb-6"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Unlock fun and educational toys for your kids
        </p>
        <button
          className="bg-pink-600 hover:bg-pink-500 text-white py-2 px-4 rounded-full text-sm font-semibold"
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
