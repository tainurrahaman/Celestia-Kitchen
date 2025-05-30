import { Helmet } from "react-helmet-async";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import Cover from "../../Shared/Cover";
import MenuCategoryCover from "../../Shared/MenuCategoryCover";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "../../Shared/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const offeredItems = menu.filter((item) => item.category === "offered");
  const saladItems = menu.filter((item) => item.category === "salad");
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const soupItems = menu.filter((item) => item.category === "soup");

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

      {/* Offered Items */}
      <SectionTitle
        subHeading={'Don"t Miss'}
        heading={"Today's Offer"}
      ></SectionTitle>
      <MenuCategory
        items={offeredItems}
        btnTitle={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>

      {/* Dessert Items */}
      <MenuCategoryCover
        img={dessertImg}
        title={"DESSERTS"}
        subTitle={"Indulgent Treats to Satisfy Your Cravings"}
      ></MenuCategoryCover>
      <MenuCategory
        items={dessertItems}
        btnTitle={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>

      {/* Pizza Items */}
      <MenuCategoryCover
        img={pizzaImg}
        title={"Pizza"}
        subTitle={"Crafted with Passion, Baked to Perfection"}
      ></MenuCategoryCover>
      <MenuCategory
        items={pizzaItems}
        btnTitle={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>

      {/* Salad Items */}
      <MenuCategoryCover
        img={saladImg}
        title={"Salad"}
        subTitle={"Naturally Nourishing, Always Refreshing"}
      ></MenuCategoryCover>
      <MenuCategory
        items={saladItems}
        btnTitle={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>

      {/* Soup Items */}
      <MenuCategoryCover
        img={soupImg}
        title={"Soup"}
        subTitle={"Crafted with Care, Served with Warmth"}
      ></MenuCategoryCover>
      <MenuCategory
        items={soupItems}
        btnTitle={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
