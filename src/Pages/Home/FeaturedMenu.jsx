import useMenu from "../../Hooks/useMenu";
import MenuCategory from "../../Shared/MenuCategory";

const FeaturedMenu = () => {
  const [menu] = useMenu();

  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <MenuCategory
      items={popularItems}
      btnTitle={"view full menu"}
    ></MenuCategory>
  );
};

export default FeaturedMenu;
