import "./PortalSideBar.scss";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { languageList } from "../../../../component/Layout/data";
import { useDispatch, useSelector } from "react-redux";
import i18next from "i18next";
import { languageChange } from "../../../../reduxToolkit/languageSlice";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import Flag from "../../../../assets/images/Flag.svg";
import Blazon from "../../../../assets/images/blazon.svg";
import Music from "../../../../assets/images/Music.svg";
import { FiPhone } from "react-icons/fi";
import eyeGlass from "../../../../assets/images/EyeGlass.png";
import { GrClose } from "react-icons/gr";
import logo from "../../../../assets/images/Logos.svg";
import burger from "../../../../assets/images/icons/burger.svg";
import { useEffect } from "react";
import { useState } from "react";
import { getContact } from "../../../../reduxToolkit/contactSlice/extraReducer";

export default function PortalSide({ data }) {
  const [state, setState] = useState(false);

  const contactData = useSelector((state) => state.contactSlice.contactData);
  const dispatch = useDispatch();

  const activeLanguage = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "uz";

  const [activeLng, setActiveLng] = useState(activeLanguage);

  const changeLanguage = (lng) => {
    dispatch(languageChange(lng));
    i18next.changeLanguage(lng);
    setActiveLng(lng);
  };

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={() => setState((state) => !state)}
      className="portal-sideBar"
    >
      <List>
        <div className="portal-sideBar-top">
          <Link to={"/portal"}>
            <img src={logo} alt="Vatandoshlar jamoat fondi" />
          </Link>
          <div className="portal-sideBar-top-btn">
            <div className="portal-sideBar-top-eyeGlass">
              <img src={eyeGlass} alt="eye glass" />
            </div>
            <div className="portal-sideBar-top-close">
              <GrClose />
            </div>
          </div>
        </div>
      </List>
      <List>
        <div className="portal-sideBar-list">
          {data?.map((el, index) => (
            <Link className="portal-sideBar-list-item" to={el?.url} key={index}>
              {el?.title}
            </Link>
          ))}
        </div>
      </List>
      <List>
        <div className="portal-sideBar-connection">
          <a
            href={`tel: ${contactData?.phone}`}
            className="portal-sideBar-connection-item"
          >
            <FiPhone className="portal-sideBar-connection-item-icon" />
            <span>{contactData?.phone}</span>
          </a>
          <a
            href={`mailto: ${contactData?.email}`}
            className="portal-sideBar-connection-item"
          >
            <HiOutlineMail className="portal-sideBar-connection-item-icon" />
            <span>{contactData?.email}</span>
          </a>
          <div className="portal-sideBar-connection-action">
            <Link to="/flag">
              <img src={Flag} alt="" />
            </Link>
            <Link to="/coat">
              <img src={Blazon} alt="" />
            </Link>
            <Link to="/anthem">
              <img src={Music} alt="" />
            </Link>
          </div>
        </div>
      </List>
      <List>
        <div className="portal-sideBar-bottom">
          <ul className="portal-sideBar-bottom-lang">
            {languageList.map((el, index) => (
              <li
                className={`portal-sideBar-bottom-lang-item ${
                  activeLng === el.type ? "langActive" : ""
                }`}
                key={index}
                onClick={() => changeLanguage(el.type)}
              >
                {el.label}
              </li>
            ))}
          </ul>

          <div className="portal-sideBar-bottom-socialMedia">
            <a
              href={contactData?.facebook}
              className="portal-sideBar-bottom-socialMedia-item"
            >
              <FaFacebookF className="portal-sideBar-bottom-socialMedia-item-icon" />
            </a>
            <a
              href={contactData?.twitter}
              className="portal-sideBar-bottom-socialMedia-item"
            >
              <FaTwitter className="portal-sideBar-bottom-socialMedia-item-icon" />
            </a>
            <a
              href={contactData?.instagram}
              className="portal-sideBar-bottom-socialMedia-item"
            >
              <AiFillInstagram className="portal-sideBar-bottom-socialMedia-item-icon" />
            </a>
          </div>
        </div>
      </List>
    </Box>
  );

  return (
    <div className="portal-sideBar">
      <Button onClick={() => setState(true)}>
        <div className="portal-sideBar-burger">
          <img src={burger} alt="burger" />
        </div>
      </Button>
      <SwipeableDrawer
        anchor={"top"}
        open={state}
        onClose={() => setState(false)}
        onOpen={() => setState(true)}
      >
        {list("top")}
      </SwipeableDrawer>
    </div>
  );
}
