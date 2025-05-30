import { Helmet } from "react-helmet-async";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import Cover from "../../Shared/Cover";
import MenuCategoryCover from "../../Shared/MenuCategoryCover";
import SectionTitle from "../../Components/SectionTitle";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Celestia Kitchen | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"Our menu"}
        subTitle={"would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        subHeading={'Don"t Miss'}
        heading={"Today's Offer"}
      ></SectionTitle>
      <MenuCategoryCover
        img={dessertImg}
        title={"DESSERTS"}
        subTitle={"Indulgent Treats to Satisfy Your Cravings"}
      ></MenuCategoryCover>
    </div>
  );
};

export default Menu;
