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

  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");

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
        title={"offered"}
        items={offered}
        btnTitle={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>

      {/* Dessert Items */}
      <MenuCategoryCover
        img={dessertImg}
        title={"desserts"}
        subTitle={"Indulgent Treats to Satisfy Your Cravings"}
      ></MenuCategoryCover>
      <MenuCategory
        title={"dessert"}
        items={dessert}
        btnTitle={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>

      {/* Pizza Items */}
      <MenuCategoryCover
        img={pizzaImg}
        title={"pizza"}
        subTitle={"Crafted with Passion, Baked to Perfection"}
      ></MenuCategoryCover>
      <MenuCategory
        title={"pizza"}
        items={pizza}
        btnTitle={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>

      {/* Salad Items */}
      <MenuCategoryCover
        img={saladImg}
        title={"salad"}
        subTitle={"Naturally Nourishing, Always Refreshing"}
      ></MenuCategoryCover>
      <MenuCategory
        title={"salad"}
        items={salad}
        btnTitle={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>

      {/* Soup Items */}
      <MenuCategoryCover
        img={soupImg}
        title={"soup"}
        subTitle={"Crafted with Care, Served with Warmth"}
      ></MenuCategoryCover>
      <MenuCategory
        title={"soup"}
        items={soup}
        btnTitle={"ORDER YOUR FAVOURITE FOOD"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
