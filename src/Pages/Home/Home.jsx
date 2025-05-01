import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import CelestiaDetails from "./CelestiaDetails";
import FeaturedMenu from "./FeaturedMenu";
import Phone from "./Phone";
import ChefRecommended from "./ChefRecommended";
import BestFood from "./BestFood";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <CelestiaDetails></CelestiaDetails>
      <FeaturedMenu></FeaturedMenu>
      <Phone></Phone>
      <ChefRecommended></ChefRecommended>
      <BestFood></BestFood>
    </div>
  );
};

export default Home;
