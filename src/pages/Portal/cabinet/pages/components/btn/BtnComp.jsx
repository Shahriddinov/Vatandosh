import "./BtnComp.scss";
import { motion } from "framer-motion";

const BtnComp = ({ el, index, activeBtn, handleBtn }) => {
  console.log(el, index, activeBtn, handleBtn);
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={el === activeBtn ? "btnComp active" : "btnComp"}
      onClick={() => handleBtn(el, index)}
    >
      {el}
    </motion.button>
  );
};

export default BtnComp;
