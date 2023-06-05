import "./BtnComp.scss";
import { motion } from "framer-motion";

const BtnComp = ({ el, activeBtn, handleBtn }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={el?.id === activeBtn?.id ? "btnComp active" : "btnComp"}
      onClick={() => handleBtn(el)}
      key={el.id}
    >
      {el.label}
    </motion.button>
  );
};

export default BtnComp;
