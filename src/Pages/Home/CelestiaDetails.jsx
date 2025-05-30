import chefImg from "../../assets/home/chef-service.jpg";
import SectionTitle from "../../Components/SectionTitle";
const CelestiaDetails = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${chefImg})` }}
        className="p-8 md:p-16 lg:px-28 lg:py-24 bg-cover bg-center w-11/12 mx-auto"
      >
        <div className="bg-white text-black p-4 md:p-12 lg:px-32 lg:py-16 text-center">
          <h3 className="text-xl md:text-3xl lg:text-4xl pb-1 md:pb-3 lg:pb-4">
            Celestia Kitchen
          </h3>
          <p className="text-[14px] md:text-[16px] lg:text-[18px]">
            CelestiaKitchen is a restaurant that blends global flavors with
            local ingredients to create a unique dining experience. Known for
            its warm ambiance and artistic presentation, it offers a curated
            menu featuring fusion dishes, seasonal specialties, and handcrafted
            beverages. CelestiaKitchen is where culinary passion meets elegant
            hospitality.
          </p>
        </div>
      </div>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
    </div>
  );
};

export default CelestiaDetails;
