import React, { useEffect, useState } from 'react';
import ToyTabCard from './ToyTabCard';



const ToyTabs = () => {
  
  const [toys, setToy] = useState([]);
  const [activeTab, setActiveTab] = useState("math");

  useEffect(() => {
    fetch(`https://toys-hub-server-two.vercel.app/categoryToys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToy(result);
        
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    
  };

    return (

      <div className="mt-7">
         <h2 className='text-center text-3xl mt-8 mb-5 font-bold'>Shop By Category</h2>
      <div className=" text-center font-bold text-2xl tabs-boxed">
        <button
          onClick={() => handleTabClick("math")}
          className={`tab ${toys === "math" && "tab-active"}`}>
          Math Toys
        </button>
        <button
          onClick={() => handleTabClick("science")}
          className={`tab ${toys === "science" && "tab-active"}`}>
          Science Toys
        </button>
        <button
          onClick={() => handleTabClick("engineering")}
          className={`tab ${toys === "engineering" && "tab-active"}`}>
          Engineering Toys
        </button>
      </div>
      <div className='divide-y-8'></div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-[75%] gap-4 mt-8">
        
        {toys.map((toy) => (<ToyTabCard key={toy._id} toy={toy}></ToyTabCard>
          
        ))}
      </div>
    </div>

    );
};

export default ToyTabs;