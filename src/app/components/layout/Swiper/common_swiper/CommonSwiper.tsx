"use client";
import React from "react";
import style from "./CommonSwiper.module.scss";
import { Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// interface Common_Swiper_Type {
//   children: React.ReactNode; // Accepts any valid React child
//   delay: number;
// }
interface CommonSwiperProps {
  children: React.ReactNode; // Accepts JSX elements as children
  delay: number;
}
const CommonSwiper: React.FC<CommonSwiperProps> = ({ children, delay }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        loop={true}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 6,
            spaceBetween: 8,
          },
        }}
        // className="mySwiper"
        modules={[Autoplay]}
        className={style.swiper}
        wrapperClass={style.swiperWrapper}
        slideClass={style.swiperSlide}
      >
        {/* Ensure children is an array before mapping */}
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))
        ) : (
          <SwiperSlide>{children}</SwiperSlide>
        )}
      </Swiper>
    </>
  );
};

export default CommonSwiper;
