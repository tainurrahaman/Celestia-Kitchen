import SectionTitle from "../../Components/SectionTitle";
import ItemCard from "../../Shared/ItemCard";

const ChefRecommended = () => {
  const recommendItems = [
    {
      _id: "642c155b2c4774f05c36eeaab",
      name: "Caeser Salad",
      image: "https://i.ibb.co.com/C38W4WPm/slide1.jpg",
      category: "salad",
      gradients: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
    {
      _id: "642c155b2c4774f05c36eeaac",
      name: "Escalope Pizzas",
      image: "https://i.ibb.co.com/7thhWGG8/slide2.jpg",
      category: "salad",
      gradients: "Eggs, Parmesan Cheese, Chicken Breast Fillets, Tomatoes",
    },
    {
      _id: "642c155b2c4774f05c36eeaa",
      name: "Walnut Soups",
      image: "https://i.ibb.co.com/PGZHwZPR/slide3.jpg",
      category: "salad",
      gradients:
        "Peanut, Eggs, Parmesan Cheese, Chicken Breast Fillets, Milks.",
    },
  ];

  return (
    <section className="w-10/12 mx-auto mb-16 md:mb-20 lg:mb-24">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"chef recommends"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-6 lg:px-10">
        {recommendItems.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommended;
