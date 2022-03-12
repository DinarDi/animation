import React from "react";
import { Controller, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IBack } from "../types";
import SlideItem from "./SlideItem";

const Background: React.FC<IBack> = ({ items, controlledFunc }) => {
  return (
    <Swiper
      className="bgSlider"
      slidesPerView={3.5}
      centeredSlides
      modules={[Parallax, Controller]}
      spaceBetween={60}
      parallax
      onSwiper={controlledFunc}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <SlideItem item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Background;
