import "./Navbar.scss";
import {
  BayroqIcon,
  EmailIcon,
  ExitIcon,
  GerbIcon,
  LogoIcon,
  MessengerIcon,
  MusicIcon,
  NotificationIcon,
  PhoneIcon,
} from "../../../../../assets/images/expert";
import { CiGlobe } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import i18next from "i18next";
import { languageChange } from "../../../../../reduxToolkit/languageSlice";
import { languageList } from "../../../../../component/Layout/data";
import { useTranslation } from "react-i18next";
import { GoSignOut } from "react-icons/go";
import { BsPersonFill } from "react-icons/bs";
import { openNotification } from "../../../../../reduxToolkit/notificationSlice/notificationSlice";
import { Tooltip } from "@mui/material";
import PortalSide from "../../../components/PortalSideBar/PortalSideBar";

function Navbar({ navbarUrl }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const notificationCount = useSelector(
    (state) => state.notification.notificationCount
  );
  const [activeLang, setactiveLang] = useState(false);
  const [activeKabinet, setActiveKabinet] = useState(false);
  const navigate = useNavigate();

  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    dispatch(languageChange(lng));
    setactiveLang((el) => !el);
  };

  const logOut = () => {
    localStorage.clear();
    window.location = "/portal";
  };

  const handleClick = (event) => {
    dispatch(openNotification(event.currentTarget));
  };

  const SideBarData = [
    {
      url: "/portal-category/victorina",
      title: t("expert.main"),
    },
    {
      url: "/portal-category/victorina/victorina-more",
      title: t("victorina.victorinas"),
    },
    {
      url: "/portal-category/victorina/victorina-finish",
      title: t("victorina.end"),
    },
    {
      url: "/portal-category/victorina/contact",
      title: t("footerContact"),
    },
  ];

  return (
    <div className="navbarvictorina">
      <div className="container">
        <Link to={navbarUrl?.home}>
          <div className="navbar-logo">
            <img src={LogoIcon} alt="" className="navbar-icon" />
            <h4 className="navbar--subname"> {t("expert.headtitle")}</h4>
          </div>
        </Link>
        <PortalSide data={SideBarData} />
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="tel:+998555022299" className="navbar--link">
              <PhoneIcon />
              +998(55)502-22-99
            </a>
          </li>
          <li className="navbar-item">
            <a href="mailto:info@vatandoshlarfondi.uz" className="navbar--link">
              <EmailIcon />
              info@vatandoshlarfondi.uz
            </a>
          </li>
        </ul>
        <div className="navbar-list">
          <Link to="/flag">
            <button className="navbarpage-icon">
              <img src={GerbIcon} alt="error" />
            </button>
          </Link>
          <Link to="/coat">
            <button className="navbarpage-icon">
              <img src={BayroqIcon} alt="error" />
            </button>
          </Link>
          <button className="navbarpage--icon">
            <MusicIcon />
          </button>
          <div className="navbarvictorina_language">
            <div
              className="navbarvictorina_language-wrapper"
              onClick={() => setactiveLang((el) => !el)}
            >
              <CiGlobe className="navbarvictorina_language-icon" />
              <span style={{ color: "white" }}>
                {languageList.find((lan) => lan.type === language)?.label}
              </span>
              <IoMdArrowDropdown className="navbarvictorina_language-iconArrow" />
            </div>
            <div
              className="navbarvictorina_language-bar"
              style={activeLang ? { display: "flex" } : null}
            >
              {languageList.map((el, index) => (
                <p
                  key={index}
                  onClick={() => {
                    handleChangeLng(el.type);
                  }}
                >
                  {el.label}
                </p>
              ))}
            </div>
          </div>

          <button className="navbarpage--notification" onClick={handleClick}>
            <Tooltip title="Account settings">
              <NotificationIcon />
            </Tooltip>
            <span className="navbarpage_notification_count">
              {notificationCount}
            </span>
          </button>
          <button
            className="navbarpage--notification"
            onClick={() => navigate("/portal-category/cabinet/chat")}
          >
            <MessengerIcon />
          </button>
          <div
            className="expert-header-cabinet"
            onClick={() => setActiveKabinet((prev) => !prev)}
          >
            <div className="navbar--button">
              <ExitIcon />
              {t("cabinet")}
            </div>
            {activeKabinet ? (
              <div
                style={{ marginLeft: "-20px" }}
                className="expert-header-cabinet-bar"
              >
                <Link
                  to={"/portal-category/cabinet"}
                  className="expert-header-cabinet-bar-cabinet"
                >
                  <BsPersonFill />
                  <span> {t("cabinet")}</span>
                </Link>
                <div
                  className="expert-header-cabinet-bar-logout"
                  onClick={logOut}
                >
                  <GoSignOut />
                  <span>{t("logOut")}</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
