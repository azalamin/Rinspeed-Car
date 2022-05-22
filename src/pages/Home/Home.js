import React from "react";
import BusinessSummary from "./BusinessSummary";
import ContactUs from "./ContactUs";
import HomeBanner from "./HomeBanner";
import OurTeam from "./OurTeam";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <Parts />
      <BusinessSummary />
      <Reviews />
      <OurTeam />
      <ContactUs />
    </main>
  );
};

export default Home;
