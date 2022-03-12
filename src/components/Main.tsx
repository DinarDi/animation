import React from "react";
import { Controller, FreeMode, Mousewheel, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMain } from "../types";
import SlideItem from "./SlideItem";

const Main: React.FC<IMain> = ({ items, controller, hideTextFunc }) => {
  return (
    <Swiper
      className="mainSlider"
      centeredSlides
      freeMode
      mousewheel
      parallax
      modules={[FreeMode, Mousewheel, Parallax, Controller]}
      breakpoints={{
        0: { slidesPerView: 2.5, spaceBetween: 20 },
        680: {
          slidesPerView: 4.5,
          spaceBetween: 60,
        },
      }}
      controller={{ control: controller }}
      onSlideChange={(e) => hideTextFunc(e.activeIndex)}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <SlideItem item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Main;
