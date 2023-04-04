import "./Navbar.scss";
import {
  EmailIcon,
  ExitIcon,
  LogoIcon,
  PhoneIcon,
} from "../../../../assets/images/expert";
import { CiGlobe } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import i18next from "i18next";
import { languageChange } from "../../../../reduxToolkit/languageSlice";
import { languageList } from "../../../../component/Layout/data";

function Navbar() {
  const location = useLocation();
  const editClass = location.pathname;
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const [activeLang, setactiveLang] = useState(false);
  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    dispatch(languageChange(lng));
    setactiveLang((el) => !el);
  };
  return (
    <div className="navbarpage">
      <div className="container">
        <Link to="/expert">
          <div className="navbar-list">
            <img src={LogoIcon} alt="" className="navbar-icon" />
            <h4
              className={
                editClass === "/expert" ? `navbar--name` : `navbar--subname`
              }
            >
              “VATANDOSHLAR” JAMOAT FONDI
            </h4>
          </div>
        </Link>
        <ul className="navbar-list">
          <li className="navbar-item">
            <a
              href="tel:+998555022299"
              className={
                editClass === "/expert" ? `navbar-link` : `navbar--link`
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
                editClass === "/expert" ? `navbar-link` : `navbar--link`
              }
            >
              <EmailIcon />
              info@vatandoshlarfondi.uz
            </a>
          </li>
        </ul>
        <div className="navbar-list">
          <div className="navbarpage_language">
            <div
              className="navbarpage_language-wrapper"
              style={{
                background: `${
                  editClass === "/expert"
                    ? "rgba(255, 255, 255, 0.2)"
                    : `#065EA9`
                }`,
              }}
              onClick={() => setactiveLang((el) => !el)}
            >
              <CiGlobe className="navbarpage_language-icon" />
              <span style={{ color: "white" }}>
                {language.split("")[0].toUpperCase() + language.split("")[1]}
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
                        editClass === "/expert"
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
          <Link
            to={"/expert/register"}
            className={
              editClass === "/expert" ? `navbar-button` : `navbar--button`
            }
          >
            <img src={ExitIcon} alt="" className="navbar-icon" />
            Kirish
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
