import SectionTitle from "../../Components/SectionTitle";
import Button from "../../Shared/Button";
import featuredImg from "../../assets/home/featured.jpg";

const BestFood = () => {
  return (
    <section
      style={{ backgroundImage: `url(${featuredImg})` }}
      className="bg-fixed bg-opacity-50 bg-gray-700 text-gray-900 pb-16 px-40"
    >
      <div className="pt-2">
        {" "}
        <SectionTitle
          subHeading={"Check it Out"}
          heading={"from our menu"}
        ></SectionTitle>
      </div>
      <div className="flex">
        <div>
          <img src={featuredImg} alt="Fuska Images" />
        </div>
        <div>
          <p>March 20, 2029</p>
          <h4>where can i get some</h4>
          <p>
            Fuska is a popular South Asian street food made of crispy hollow
            shells filled with spicy mashed potatoes, tamarind water, and
            chickpeas. It's a tangy, savory snack loved for its burst of flavors
            and crunch.
          </p>
          <Button title={"Read More"}></Button>
        </div>
      </div>
    </section>
  );
};

export default BestFood;
