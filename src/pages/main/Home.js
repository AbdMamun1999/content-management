import React from "react";
import BrandSection from "../../components/main/BrandSection/BrandSection";

import Navbar from "../../components/main/Navbar";
import Contents from "../../components/main/Contents";
import Pagination from "../../components/main/Pagination";
import Footer from "../../components/main/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BrandSection />
      <Contents />
      <Pagination />
      <Footer/>
    </div>
  );
};

export default Home;
