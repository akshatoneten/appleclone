import React from 'react'
import Banner from "./Banner";
import Bannerb from "./Bannerb";
import Bannerc from "./Bannerc";
import Navbar from "./Navbar";
import Gridsix from "./Gridsix";
import Bannerlast from "./Bannerlast";
import Footer from "./Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Bannerb />
      <Bannerc />
      <Gridsix />
      <Bannerlast />
      <Footer />
    </div>
  )
}

export default Home