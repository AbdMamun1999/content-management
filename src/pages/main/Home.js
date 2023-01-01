import React from "react";
import BrandSection from "../../components/main/BrandSection/BrandSection";

import Navbar from "../../components/main/Navbar";
// import Contents from "../../components/main/Contents";
import Pagination from "../../components/Dashboard/Pagination";
import Footer from "../../components/main/Footer";
import Main from "../../components/main/Main";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BrandSection />
      {/* <Contents /> */}
      <Main/>
      {/* <Pagination /> */}
      <Footer/>
    </div>
  );
};

export default Home;
