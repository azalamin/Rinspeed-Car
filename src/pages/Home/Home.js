import React from "react";
import Navbar from "../../components/Navbar";
import HomeBanner from "./HomeBanner";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HomeBanner />
      </main>
    </>
  );
};

export default Home;
