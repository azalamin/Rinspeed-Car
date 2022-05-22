import React from "react";
import BusinessSummary from "./BusinessSummary";
import HomeBanner from "./HomeBanner";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <Parts />
      <BusinessSummary />
      <Reviews />
    </main>
  );
};

export default Home;
