import React, { useEffect, useRef, useState } from "react";
import "./menu.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Menu = () => {
  const navbarRef = useRef();
  const scrollRef = useRef(null);
  const [isFixed, setFixed] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    scrollRef.current = document.querySelector(".navbar").offsetTop + 18;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 92) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  }, [scrollRef.current]);

  return (
    <div className={`navbar ${isFixed ? "fixed" : ""}`} ref={navbarRef}>
      <ul className="menu">
        <motion.li whileTap={{ scale: 0.6 }} className="menu_item">
          <Link to="/about" className="menu_link">
            {t("about")}
          </Link>
        </motion.li>
        <motion.li whileTap={{ scale: 0.6 }} className="menu_item">
          <Link to="/" className="menu_link">
            {t("citizin")}
          </Link>
        </motion.li>
        <motion.li whileTap={{ scale: 0.6 }} className="menu_item">
          <Link to="/" className="menu_link">
            {t("projects")}
          </Link>
        </motion.li>
        <motion.li whileTap={{ scale: 0.6 }} className="menu_item">
          <Link to="/" className="menu_link">
            {t("contects")}
          </Link>
        </motion.li>
        <motion.li whileTap={{ scale: 0.6 }} className="menu_item">
          <Link to="/" className="menu_link">
            {t("information")}
          </Link>
        </motion.li>
        <motion.li whileTap={{ scale: 0.6 }} className="menu_item">
          <Link to="/" className="menu_link">
            {t("link")}
          </Link>
        </motion.li>
        <motion.li whileTap={{ scale: 0.6 }} className="menu_item">
          ...
        </motion.li>
      </ul>
    </div>
  );
};

export default Menu;
