import Banner from "./Banner";
import Category from "./Category";
import CelestiaDetails from "./CelestiaDetails";
import FeaturedMenu from "./FeaturedMenu";
import Phone from "./Phone";
import ChefRecommended from "./ChefRecommended";
import BestFood from "./BestFood";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Celestia Kitchen | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <CelestiaDetails></CelestiaDetails>
      <FeaturedMenu></FeaturedMenu>
      <Phone></Phone>
      <ChefRecommended></ChefRecommended>
      <BestFood></BestFood>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
