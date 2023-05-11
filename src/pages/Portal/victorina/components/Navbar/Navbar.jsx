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
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import i18next from "i18next";
import { languageChange } from "../../../../../reduxToolkit/languageSlice";
import { languageList } from "../../../../../component/Layout/data";
import { useTranslation } from "react-i18next";

function Navbar({ navbarUrl }) {
  const { t } = useTranslation();
  const location = useLocation();
  const editClass = location.pathname.split("/");
  const dispatch = useDispatch();
  const { id } = useParams();
  const language = useSelector((state) => state.language.language);
  const [activeLang, setactiveLang] = useState(false);

  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    dispatch(languageChange(lng));
    setactiveLang((el) => !el);
  };
  return (
    <div className="navbarvictorina">
      <div className="container">
        <Link to={navbarUrl?.home}>
          <div className="navbar-list">
            <img src={LogoIcon} alt="" className="navbar-icon" />
            <h4 className="navbar--subname">“VATANDOSHLAR” JAMOAT FONDI</h4>
          </div>
        </Link>
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
          <button className="navbarpage-icon">
            <img src={GerbIcon} />
          </button>
          <button className="navbarpage-icon">
            <img src={BayroqIcon} />
          </button>
          <button className="navbarpage--icon">
            <MusicIcon />
          </button>
          <div className="navbarvictorina_language">
            <div
              className="navbarvictorina_language-wrapper"
              onClick={() => setactiveLang((el) => !el)}>
              <CiGlobe className="navbarvictorina_language-icon" />
              <span style={{ color: "white" }}>
                {languageList.find((lan) => lan.type === language)?.label}
              </span>
              <IoMdArrowDropdown className="navbarvictorina_language-iconArrow" />
            </div>
            <div
              className="navbarvictorina_language-bar"
              style={activeLang ? { display: "flex" } : null}>
              {languageList.map((el, index) => (
                <p
                  key={index}
                  onClick={() => {
                    handleChangeLng(el.type);
                  }}>
                  {el.label}
                </p>
              ))}
            </div>
          </div>

          <button className="navbarpage--notification">
            <NotificationIcon />
          </button>
          <button className="navbarpage--notification">
            <MessengerIcon />
          </button>
          <Link to="/portal" className="navbar--button">
            <ExitIcon />
            Kirish
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
