import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./privateInformation.scss";
import { motion } from "framer-motion";

const menuButtons = [
  {
    id: 1,
    name: "Общая информация",
    url: "personal-information",
  },
  {
    id: 2,
    name: "Работа",
    url: "job",
  },
  {
    id: 3,
    name: "Образование",
    url: "education",
  },
  {
    id: 4,
    name: "Ilmiy faoliyatingiz",
    url: "scientificActivity",
  },
  {
    id: 5,
    name: "Taklifingiz",
    url: "offer",
  },
  {
    id: 6,
    name: "Volonyorlik faoliyati",
    url: "voluntaryActivity",
  },
];

const PrivateInformation = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(pathname.split("/")[4]);
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
