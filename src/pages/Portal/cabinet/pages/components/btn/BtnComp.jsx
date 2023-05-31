import "./BtnComp.scss";
import { motion } from "framer-motion";

const BtnComp = ({ el, activeBtn, handleBtn }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={el.id === activeBtn ? "btnComp active" : "btnComp"}
      onClick={() => handleBtn({ id: el?.id, status: el?.status })}
    >
      {el.label}
    </motion.button>
  );
};

export default BtnComp;
