import { Helmet } from "react-helmet-async";
import menuImg from "../../assets/menu/banner3.jpg";
import Cover from "../../Shared/Cover";

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
      <h3>banner</h3>
    </div>
  );
};

export default Menu;
