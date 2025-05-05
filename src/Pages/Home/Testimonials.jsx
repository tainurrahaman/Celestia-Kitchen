import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { data } from "autoprefixer";
import TestimonialsCard from "./TestimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="w-11/12 md:w-9/12 mx-auto mb-10 md:mb-20 mt-10">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"testimonials"}
      ></SectionTitle>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                className="pb-6 md:pb-8"
              />
              <div>
                <FaQuoteLeft className="text-white text-4xl md:text-6xl"></FaQuoteLeft>
              </div>
              <p className="px-8 md:px-20 text-center pt-4 md:pt-8 pb-2">
                {review.details}
              </p>
              <h3 className="font-medium text-3xl md:text-4xl text-yellow-600 pb-10">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
