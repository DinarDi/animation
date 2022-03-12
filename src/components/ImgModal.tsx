import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IModal } from "../types";

const ImgModal: React.FC<IModal> = ({ img, closeFunc }) => {
  const [container] = useState(() => {
    return document.createElement("div");
  });
  useEffect(() => {
    container.classList.add("modal");
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  const variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.2, type: "tween", duration: 0.5 },
    },
    close: { scale: 0, opacity: 0, transition: { duration: 0.5 } },
  };

  return ReactDOM.createPortal(
    <motion.div
      onClick={closeFunc}
      className="modal-img"
      initial="hidden"
      animate="visible"
      exit="close"
      variants={variants}
    >
      <img src={img} alt="Something" />
    </motion.div>,
    container
  );
};

export default ImgModal;
