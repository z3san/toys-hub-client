import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const kidImages = [
    'https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=362&q=80',
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80',
    'https://images.unsplash.com/photo-1618847473021-27332d0af8e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1619182311545-663d9d5f75ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8NSUyMHllYXIlMjBvbGQlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  ];

const ShopByAge = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
      }, []);


    return (
        <div className="w-full  py-8 px-4 mt-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-3">Shop by Age</h2>
        <p className="text-center mb-3">Our Collections</p>
        <div className="md:flex items-center gap-2 justify-center">
          {kidImages.map((imageUrl, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="flip-left"
              data-aos-duration="800"
              data-aos-delay={index * 200}
            >
              <div className="w-56 h-56 rounded-full overflow-hidden">
                <img src={imageUrl} alt={`Kid ${index + 1}`} className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-700 font-bold mt-2 hover:text-pink-500 transition duration-300">
                {index === 0 ? 'For Baby' : `${index + 1} to ${index + 2} years`}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ShopByAge;