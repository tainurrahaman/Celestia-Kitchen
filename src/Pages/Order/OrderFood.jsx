import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import orderFoodImg from "../../assets/shop/order.jpg";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import TabItems from "./TabItems";

const OrderFood = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

  const drinksItems = menu.filter((item) => item.category === "drinks");
  const saladItems = menu.filter((item) => item.category === "salad");
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const soupItems = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Celestia Kitchen | Order Food</title>
      </Helmet>
      <Cover
        img={orderFoodImg}
        title={"Order Food"}
        subTitle={"Order your delicious Food here."}
      ></Cover>

      <div className="mt-10 mb-20 w-9/12 mx-auto">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex justify-center">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <TabItems items={saladItems}></TabItems>
          </TabPanel>
          <TabPanel>
            <TabItems items={pizzaItems}></TabItems>
          </TabPanel>
          <TabPanel>
            <TabItems items={soupItems}></TabItems>
          </TabPanel>
          <TabPanel>
            <TabItems items={dessertItems}></TabItems>
          </TabPanel>
          <TabPanel>
            <TabItems items={drinksItems}></TabItems>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderFood;
