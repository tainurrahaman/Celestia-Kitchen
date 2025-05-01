import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"From 11:00am to 10:00pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-14 md:mb-24"
      >
        <SwiperSlide>
          <img src={slide1}></img>
          <h2 className="text-[14px] lg:text-3xl uppercase text-center -mt-6 lg:-mt-10 text-black">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2}></img>
          <h2 className="text-[14px] lg:text-3xl uppercase text-center -mt-6 lg:-mt-10 text-black">
            Pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3}></img>
          <h2 className="text-[14px] lg:text-3xl uppercase text-center -mt-6 lg:-mt-10 text-black">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4}></img>
          <h2 className="text-[14px] lg:text-3xl uppercase text-center -mt-6 lg:-mt-10 text-black">
            Desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5}></img>
          <h2 className="text-[14px] lg:text-3xl uppercase text-center -mt-6 lg:-mt-10 text-black">
            Salads
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
