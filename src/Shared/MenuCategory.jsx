import { Link } from "react-router-dom";
import Button from "./Button";
import MenuList from "./MenuList";

const MenuCategory = ({ items, btnTitle, title }) => {
  return (
    <section className="flex flex-col items-center my-14 w-9/12 mx-auto">
      <div className="grid md:grid-cols-2 gap-1 md:gap-6 mb-6 md:mb-12">
        {items.map((item) => (
          <MenuList key={item._id} item={item}></MenuList>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <Button title={btnTitle}></Button>
      </Link>
    </section>
  );
};

export default MenuCategory;
