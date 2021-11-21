import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

function GigsCarousel() {
  return (
    <div className="text-white">
      <h1>testing</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide className=" group text-center">hi</SwiperSlide>
        <SwiperSlide className=" group text-center">hi</SwiperSlide>
        <SwiperSlide className=" group text-center">hi</SwiperSlide>
        <SwiperSlide className=" group text-center">hi</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default GigsCarousel;
