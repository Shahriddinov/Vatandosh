import "./Navbar.scss";
import {
  BayroqIcon,
  EmailIcon,
  ExitIcon,
  EyeIcon,
  GerbIcon,
  LogoIcon,
  MessengerIcon,
  MusicIcon,
  NotificationIcon,
  PhoneIcon,
} from "../../../../../assets/images/expert";
import { CiGlobe } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useState } from "react";
import i18next from "i18next";
import { languageChange } from "../../../../../reduxToolkit/languageSlice";
import { languageList } from "../../../../../component/Layout/data";
import { useTranslation } from "react-i18next";
import { GoSignOut } from "react-icons/go";
import { BsPersonFill } from "react-icons/bs";
import { GrayContext } from "../../../../../context/GrayContext";

function Navbar({ navbarUrl }) {
  const { t } = useTranslation();
  const location = useLocation();
  const editClass = location.pathname.split("/");
  const dispatch = useDispatch();
  const { communityCountryId } = useParams();
  const language = useSelector((state) => state.language.language);
  const [activeLang, setactiveLang] = useState(false);
  const { grayScale } = useContext(GrayContext);

  const [activeKabinet, setActiveKabinet] = useState(false);

  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    dispatch(languageChange(lng));
    setactiveLang((el) => !el);
  };

  const logOut = () => {
    localStorage.clear();
    window.location = "/portal";
  };

  return (
    <div className="navbarpage">
      <div className="container">
        <div className="navbarpage__inner">
          <Link to={navbarUrl?.home}>
            <div className="navbar-list">
              <img src={LogoIcon} alt="" className="navbar-icon" />
              <h4
                className={
                  editClass.length <= 3 || communityCountryId !== undefined
                    ? `navbar--name`
                    : `navbar--subname`
                }
              >
                {t("expert.headtitle")}
              </h4>
            </div>
          </Link>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a
                href="tel:+998555022299"
                className={
                  editClass.length <= 3 || communityCountryId !== undefined
                    ? `navbar-link`
                    : `navbar--link`
                }
              >
                <PhoneIcon />
                +998(55)502-22-99
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="mailto:info@vatandoshlarfondi.uz"
                className={
                  editClass.length <= 3 || communityCountryId !== undefined
                    ? `navbar-link`
                    : `navbar--link`
                }
              >
                <EmailIcon />
                info@vatandoshlarfondi.uz
              </a>
            </li>
          </ul>
          <div className="navbar-list">
            <button className="navbarpage-icon">
              <Link to={"/flag"}>
                <img src={GerbIcon} alt="" />
              </Link>
            </button>
            <button className="navbarpage-icon">
              <Link to={"/coat"}>
                <img src={BayroqIcon} alt="" />
              </Link>
            </button>
            <button
              className={
                editClass.length <= 3 || communityCountryId !== undefined
                  ? `navbarpage-icon`
                  : `navbarpage--icon`
              }
            >
              <Link to={"/anthem"}>
                <MusicIcon />
              </Link>
            </button>
            <button
              onClick={() => grayScale()}
              className={
                editClass.length <= 3 || communityCountryId !== undefined
                  ? `navbarpage-notification`
                  : `navbarpage--notification`
              }
            >
              <EyeIcon />
            </button>
            <div className="navbarpage_language">
              <div
                className="navbarpage_language-wrapper"
                style={{
                  background: `${
                    editClass.length <= 3 || communityCountryId !== undefined
                      ? "rgba(255, 255, 255, 0.2)"
                      : `#065EA9`
                  }`,
                }}
                onClick={() => setactiveLang((el) => !el)}
              >
                <CiGlobe className="navbarpage_language-icon" />
                <span style={{ color: "white" }}>
                  {languageList.find((lan) => lan.type === language).label}
                </span>
                <IoMdArrowDropdown className="navbarpage_language-iconArrow" />
              </div>
              <div
                className="navbarpage_language-bar"
                style={
                  activeLang
                    ? {
                        display: "flex",
                        background: `${
                          editClass.length <= 3
                            ? "rgba(255, 255, 255, 0.2)"
                            : `#065EA9`
                        }`,
                      }
                    : null
                }
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
            <button
              className={
                editClass.length <= 3 || communityCountryId !== undefined
                  ? `navbarpage-notification`
                  : `navbarpage--notification`
              }
            >
              <NotificationIcon />
            </button>
            <button
              className={
                editClass.length <= 3 || communityCountryId !== undefined
                  ? `navbarpage-notification`
                  : `navbarpage--notification`
              }
            >
              <MessengerIcon />
            </button>
            <div
              className="expert-header-cabinet"
              onClick={() => setActiveKabinet((prev) => !prev)}
            >
              <div
                className={
                  editClass.length <= 3 || communityCountryId !== undefined
                    ? `navbar-button`
                    : `navbar--button`
                }
              >
                <ExitIcon />
                Кабинет
              </div>
              {activeKabinet ? (
                <div className="expert-header-cabinet-bar">
                  <Link
                    to={"/portal-category/cabinet"}
                    className="expert-header-cabinet-bar-cabinet"
                  >
                    <BsPersonFill />
                    <span>Кабинет</span>
                  </Link>
                  <div
                    className="expert-header-cabinet-bar-logout"
                    onClick={logOut}
                  >
                    <GoSignOut />
                    <span>Выйти</span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
