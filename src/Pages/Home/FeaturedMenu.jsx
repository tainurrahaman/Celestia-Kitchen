import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuList from "../../Shared/MenuList";
import Button from "../../Shared/Button";

const FeaturedMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((menu) => menu.category == "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="flex flex-col items-center mb-5 w-11/12 mx-auto">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-1 md:gap-6 mb-6 md:mb-12">
        {menu.map((item) => (
          <MenuList key={item._id} item={item}></MenuList>
        ))}
      </div>
      <Button title={"View full menu"}></Button>
    </section>
  );
};

export default FeaturedMenu;
