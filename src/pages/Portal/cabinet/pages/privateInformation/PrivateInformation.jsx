import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./privateInformation.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PrivateInformation = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(pathname.split("/")[4]);
  const { t } = useTranslation();
  const menuButtons = [
    {
      id: 1,
      name: t("private-information.generalInformation"),
      url: "personal-information",
    },
    {
      id: 2,
      name: t("private-information.job"),
      url: "job",
    },
    {
      id: 3,
      name: t("private-information.education"),
      url: "education",
    },
    {
      id: 4,
      name: t("private-information.scientificActivity"),
      url: "scientificActivity",
    },
    {
      id: 5,
      name: t("private-information.offer"),
      url: "offer",
    },
    {
      id: 6,
      name: t("private-information.volunteerActivity"),
      url: "voluntaryActivity",
    },
  ];
  return (
    <div className="piMainCont">
      <div className="piMainCont-secondaryCont">
        <div className="piMainCont-secondaryCont-navCont">
          <ul>
            {menuButtons.map((el, index) => (
              <motion.li whileTap={{ scale: 0.9 }} key={index}>
                <Link
                  className={el.url === active && "active"}
                  onClick={() => setActive(el.url)}
                  to={el.url}
                >
                  {el.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="piMainCont-secondaryCont-outletsCont">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrivateInformation;
