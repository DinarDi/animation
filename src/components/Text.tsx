import { motion } from "framer-motion";
import React from "react";
import { IText } from "../types";

const Text: React.FC<IText> = ({ hide }) => {
  const variantsLogo = {
    hidden: {
      opacity: 0,
      y: "-100",
    },
    visible: {
      opacity: 1,
      y: "0",
    },
  };

  const variantsP = {
    hidden: {
      opacity: 0,
      y: "100",
    },
    visible: {
      opacity: 1,
      y: "0",
    },
  };

  return (
    <div className="description">
      <motion.div
        className="logo"
        initial="hidden"
        animate={hide ? "" : "visible"}
        variants={variantsLogo}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
      >
        Lorem
      </motion.div>
      <motion.p
        initial="hidden"
        animate={hide ? "" : "visible"}
        variants={variantsP}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 12,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
        placerat mauris, eu rhoncus augue. Nulla blandit et nibh a rutrum. Sed
        non aliquam ligula, non tincidunt dui. Vivamus lobortis imperdiet mauris
        at vestibulum. Etiam viverra neque eu urna ornare, sit amet aliquet leo
        elementum. Aliquam et egestas leo. Cras nec facilisis urna. Morbi
        rhoncus libero vitae magna posuere accumsan. Quisque semper vestibulum
        nisl, ac facilisis justo efficitur et. Suspendisse aliquam vehicula
        mauris et interdum.
      </motion.p>
    </div>
  );
};

export default Text;
