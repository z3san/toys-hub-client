import React, { useContext, useEffect } from "react";
import Banner from "../Banner/Banner";
import ToyTabs from "../../ToyTabs/ToyTabs";
import TopProduct from "../TopProduct/TopProduct";
import { AuthContext } from "../../../Providers/AuthProvider";
import lazyAnim from "../../../assets/lazyAnim.json";
import LazyLoad from "react-lazy-load";
import Lottie from "lottie-react";
import ToysGallery from "../ToysGallery/ToysGallery";
import ShopByAge from "../ShopByAge/ShopByAge";
import {Helmet} from "react-helmet";
import useTitle from "../../../../Hook/useTitle";



const Home = () => {
  useTitle("Home");
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-screen bg-white">
        <LazyLoad
          className="flex justify-center items-center h-full"
          height={762}
        >
          <Lottie animationData={lazyAnim}></Lottie>
        </LazyLoad>
      </div>
    );
  }

  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
      <Banner />

      <ToysGallery></ToysGallery>

      <ShopByAge></ShopByAge>

      <ToyTabs></ToyTabs>

      <TopProduct></TopProduct>
    </>
  );
};

export default Home;
