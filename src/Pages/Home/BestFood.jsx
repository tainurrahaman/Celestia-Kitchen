import SectionTitle from "../../Components/SectionTitle";
import Button from "../../Shared/Button";
import featuredImg from "../../assets/home/featured.jpg";

const BestFood = () => {
  return (
    <section
      style={{ backgroundImage: `url(${featuredImg})` }}
      className="bg-fixed bg-opacity-50 bg-gray-700 text-gray-900 pb-16 px-8 md:px-16 lg:px-32 w-11/12 mx-auto"
    >
      <div className="pt-2 flex-1">
        <SectionTitle
          subHeading={"Check it Out"}
          heading={"from our menu"}
        ></SectionTitle>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 flex-1">
        <div>
          <img src={featuredImg} alt="Fuska Images" className="" />
        </div>
        <div>
          <p className="font-semibold text-[22px] md:text-[24px]">
            March 20, 2029
          </p>
          <h4 className="font-semibold text-[22px] md:text-[24px] uppercase pb-2">
            where can i get some
          </h4>
          <p className="pb-2 md:pb-4">
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
