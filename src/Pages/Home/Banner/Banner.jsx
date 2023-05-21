import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="relative h-screen overflow-hidden"
      style={{
         backgroundImage: `url('https://i.ibb.co/x7xs3tN/banner.png')` ,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1
          className="text-5xl font-bold text-blue-600 mb-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Welcome to ToysHub
        </h1>
        <p
          className="text-xl text-blue-500 mb-6"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Unlock fun and educational toys for your kids
        </p>
        <Link to="/allToys">  <button
          className="bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded-full text-sm font-semibold"
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          Explore Now
        </button></Link>
      
      </div>
    </div>
  );
};

export default Banner;
