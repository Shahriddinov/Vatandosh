import "./RegisterHeader.scss";
import logo from "../../../../../assets/images/Logo.png";
import mail from "../../../../../assets/images/icons/mail.svg";
import tel from "../../../../../assets/images/icons/Phone-auth.svg";
import { CiGlobe } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import i18next from "i18next";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageChange } from "../../../../../reduxToolkit/languageSlice";
import burger from "../../../../../assets/images/icons/burger.svg";
import { languageList } from "../../../../../component/Layout/data";
import { Link } from "react-router-dom";

export default function RegisterHeader() {
  const [activeLangBar, setactiveLangBar] = useState(false);

  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const handleChangeLng = (lng) => {
    i18next.changeLanguage(lng);
    dispatch(languageChange(lng));
    setactiveLangBar(false);
  };

  return (
    <header className="auth-header">
      <div className="container">
        <div className="auth-header-wrapper">
          <Link to={"/portal"} className="auth-header-logo">
            <img src={logo} alt="logo" />
            <p>VATANDOSHLAR JAMOAT FONDI</p>
          </Link>
          <nav className="auth-header-nav">
            <div className="auth-header-nav-link">
              <a className="auth-header-nav-link-item" href="tel:+998555022299">
                <img src={tel} alt="tel" />
                <span>+998(55)502-22-99</span>
              </a>
              <a
                className="auth-header-nav-link-item"
                href="mailto:info@vatandoshlarfondi.uz"
              >
                <img src={mail} alt="mail" />
                <span>info@vatandoshlarfondi.uz</span>
              </a>
            </div>
            <div className="auth-header-nav-lang">
              <div
                className="auth-header-nav-lang-wrapper"
                onClick={() => setactiveLangBar((el) => !el)}
              >
                <CiGlobe className="auth-header-nav-lang-icon" />
                <span>
                  {languageList.find((lan) => lan.type === language).label}
                </span>
                <IoMdArrowDropdown className="auth-header-nav-lang-iconArrow" />
              </div>
              <div
                className="auth-header-nav-lang-bar"
                style={activeLangBar ? { display: "flex" } : null}
              >
                {languageList.map((el, index) => (
                  <p key={index} onClick={() => handleChangeLng(el.type)}>
                    {el.label}
                  </p>
                ))}
              </div>
            </div>
            <div className="auth-header-nav-burger">
              <img src={burger} alt="burger" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
