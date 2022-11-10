import React from "react";
import image1 from "../Images/slider-3.jpg";
import image2 from "../Images/slider-2.jpg";
import image3 from "../Images/slider-1.jpg";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";

function Slider() {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        speed={800}
        loop
        navigation
        className="slider"
      >
        <SwiperSlide className="slide">
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={image3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
