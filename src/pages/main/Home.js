import React from "react";
import BrandSection from "../../components/main/BrandSection/BrandSection";

import Navbar from "../../components/main/Navbar";
import Contents from "../../components/main/Contents";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BrandSection />
      <Contents />
    </div>
  );
};

export default Home;
