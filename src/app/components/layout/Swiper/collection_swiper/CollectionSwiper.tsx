"use client";
import style from "./CollectionSwiper.module.scss";
import { Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import { ComponentProps } from "@/types/function_types";
interface CommonSwiperProps {
  children: React.ReactNode; // Accepts JSX elements as children
  //   delay: number;
}
const CollectionSwiper: React.FC<CommonSwiperProps> = ({ children }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        loop={true}
        autoplay={{
          delay: 4500,
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 25,
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

export default CollectionSwiper;
