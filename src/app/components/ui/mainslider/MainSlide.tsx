"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ComponentProps } from '@/types/function_type';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from './MainSlide.module.scss';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';

const MainSlider: React.FC<ComponentProps> = ({ children }) => {
  const [_, setInit] = useState(Boolean);
  return (
    <div className={style.container}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          enabled: false,
        }}
        navigation={{
          enabled: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={style.Swiper}
        onInit={() => setInit(true)}
      >
        {/* Ensure children is an array before mapping */}
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))
        ) : (
          <SwiperSlide>{children}</SwiperSlide>
        )}
        <div className={style.pagination_navigation}>
        </div>
      </Swiper>

    </div>
  );
}

export default MainSlider;



