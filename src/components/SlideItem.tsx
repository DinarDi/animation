import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { ISlideItem } from "../types";
import ImgModal from "./ImgModal";

const SlideItem: React.FC<ISlideItem> = ({ item }) => {
  const { id, url } = item;
  const [openModal, setOpenModal] = useState(false);
  const modalHandler = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div
        className="slide__img"
        style={{ backgroundImage: `url(${url})` }}
        data-swiper-parallax={id % 2 === 0 ? "30%" : "20%"}
        onClick={modalHandler}
      ></div>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {openModal && <ImgModal img={url} closeFunc={modalHandler} />}
      </AnimatePresence>
    </>
  );
};

export default SlideItem;
