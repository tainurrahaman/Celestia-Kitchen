import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import orderFoodImg from "../../assets/shop/order.jpg";
import { useState } from "react";

const OrderFood = () => {
  const [tabIndex, setTabIndex] = useState(0);
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

      <div className="flex justify-center my-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderFood;
