import "./RegisterHeader.scss";
import logo from "../../../../../assets/images/Logo.png"
import mail from "../../../../../assets/images/icons/mail.svg";
import tel from "../../../../../assets/images/icons/Phone-auth.svg";
import { CiGlobe } from 'react-icons/ci';
import { IoMdArrowDropdown } from 'react-icons/io';
import background from "../../../../../assets/images/register/header-background-image.svg";
import { useState } from "react";

export default function RegisterHeader() {
  const [activeLangBar, setactiveLangBar] = useState(false);
  console.log(activeLangBar);

  return (
    <header className="auth-header">
      <img className="auth-header-backgroundImage" src={background} alt="" />
      <div className="container">
        <div className="auth-header-wrapper">
          <div className="auth-header-logo">
            <img src={logo} alt="logo" />
            <p>VATANDOSHLAR JAMOAT FONDI</p>
          </div>
          <nav className="auth-header-nav">
            <div className="auth-header-nav-link">
              <a className="auth-header-nav-link-item" href="tel:+998555022299">
                <img src={tel} alt="tel" />
                <span>+998(55)502-22-99</span>
              </a>
              <a className="auth-header-nav-link-item" href="mailto:info@vatandoshlarfondi.uz">
                <img src={mail} alt="mail" />
                <span>info@vatandoshlarfondi.uz</span>
              </a>
            </div>
            <div className="auth-header-nav-lang">
              <div className="auth-header-nav-lang-wrapper" onClick={() => setactiveLangBar((el) => !el)}>
                <CiGlobe className="auth-header-nav-lang-icon" />
                <span>Uz</span>
                <IoMdArrowDropdown className="auth-header-nav-lang-iconArrow" />
              </div>
              <div className="auth-header-nav-lang-bar" style={activeLangBar ? { display: "flex" } : null}>
                <p>Uz</p>
                <p>Ru</p>
                <p>En</p>
              </div>

            </div>
          </nav>
        </div>
      </div>

    </header>
  )
}
