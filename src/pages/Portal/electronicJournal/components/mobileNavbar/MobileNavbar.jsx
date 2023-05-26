import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageChange } from "../../../../../reduxToolkit/languageSlice";
import i18next from "i18next";
import { languageList } from "../../../../../component/Layout/data";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Box, SwipeableDrawer } from "@mui/material";
import "./mobileNavbar.scss";
import { MobileCenter, MobileTop } from "./components";

const activeLanguage = localStorage.getItem("language")
  ? localStorage.getItem("language")
  : "uz";

const MobileNavbar = ({ active, setActive }) => {
  const dispatch = useDispatch();

  const [activeLng, setActiveLng] = useState(activeLanguage);
  const contactData = useSelector((state) => state.contactSlice.contactData);

  const changeLanguage = (lng) => {
    dispatch(languageChange(lng));
    i18next.changeLanguage(lng);
    setActiveLng(lng);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setActive(open);
  };

  return (
    <SwipeableDrawer
      anchor={"top"}
      open={active}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box
        sx={{ width: "auto" }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div className="mobile-sideBar">
          <div className="header-sideBar">
            <div className="header-sideBar-wrapper">
              <MobileTop />
              <MobileCenter contactData={contactData} />
              <div className="header-sideBar-bottom">
                <ul className="header-sideBar-bottom-lang">
                  {languageList.map((el, index) => (
                    <li
                      className={`header-sideBar-bottom-lang-item ${
                        activeLng === el.type ? "langActive" : ""
                      }`}
                      key={index}
                      onClick={() => changeLanguage(el.type)}
                    >
                      {el.label}
                    </li>
                  ))}
                </ul>

                <div className="header-sideBar-bottom-socialMedia">
                  <a
                    href={contactData?.facebook}
                    target="blank"
                    className="header-sideBar-bottom-socialMedia-item"
                  >
                    <FaFacebookF className="header-sideBar-bottom-socialMedia-item-icon" />
                  </a>
                  <a
                    href={contactData?.twitter}
                    target="blank"
                    className="header-sideBar-bottom-socialMedia-item"
                  >
                    <FaTwitter className="header-sideBar-bottom-socialMedia-item-icon" />
                  </a>
                  <a
                    href={contactData?.instagram}
                    target="blank"
                    className="header-sideBar-bottom-socialMedia-item"
                  >
                    <AiFillInstagram className="header-sideBar-bottom-socialMedia-item-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </SwipeableDrawer>
  );
};

export default MobileNavbar;
