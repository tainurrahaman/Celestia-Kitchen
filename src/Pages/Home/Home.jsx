import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import CelestiaDetails from "./CelestiaDetails";
import FeaturedMenu from "./FeaturedMenu";
import Phone from "./Phone";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <CelestiaDetails></CelestiaDetails>
      <FeaturedMenu></FeaturedMenu>
      <Phone></Phone>
    </div>
  );
};

export default Home;
