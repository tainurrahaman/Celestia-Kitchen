import React from "react";
import FoodCard from "./FoodCard";

const TabItems = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-5 mt-10">
      {items.map((items) => (
        <FoodCard key={items._id} items={items}></FoodCard>
      ))}
    </div>
  );
};

export default TabItems;
