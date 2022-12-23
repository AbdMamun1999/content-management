import React from "react";
import BrandSection from "../../components/main/BrandSection/BrandSection";

import Navbar from "../../components/main/Navbar";
import Products from "../../components/main/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BrandSection />
      <Products />
    </div>
  );
};

export default Home;
