import React from "react";
import BusinessSummary from "./BusinessSummary";
import HomeBanner from "./HomeBanner";
import Parts from "./Parts";

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <Parts />
      <BusinessSummary />
    </main>
  );
};

export default Home;
