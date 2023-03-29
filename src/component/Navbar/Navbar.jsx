import "./Navbar.scss";
import {
  EmailIcon,
  ExitIcon,
  LogoIcon,
  PhoneIcon,
} from "../../assets/images/expert";
import { CiGlobe } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const editClass = location.pathname;
  return (
    <div className="navbar-page">
      <div className="container">
        <div className="navbar-list">
          <img src={LogoIcon} alt="" className="navbar-icon" />
          <h4>“VATANDOSHLAR” JAMOAT FONDI</h4>
        </div>
        <ul className="navbar-list">
          <li className="navbar-item">
            <a
              href="tel:+998555022299"
              className={
                editClass === "/expert" ? `navbar-link` : `navbar--link`
              }>
              <img src={PhoneIcon} alt="" className="navbar-icon" />
              +998(55)502-22-99
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="mailto:info@vatandoshlarfondi.uz"
              className={
                editClass === "/expert" ? `navbar-link` : `navbar--link`
              }>
              <img src={EmailIcon} alt="" className="navbar-icon" />
              info@vatandoshlarfondi.uz
            </a>
          </li>
        </ul>
        <div className="navbar-list">
          <div className="header_navbar_language">
            <div className="header_navbar_language-wrapper searches">
              <CiGlobe className="header_navbar_language-icon" />
              <span style={{ color: "white" }}></span>
              <IoMdArrowDropdown className="header_navbar_language-iconArrow" />
            </div>
            <div className="header_navbar_language-bar searches">
              <p>Uz</p>
              <p>Ru</p>
              <p>En</p>
            </div>
          </div>
          <button className="navbar-button">
            <img src={ExitIcon} alt="" className="navbar-icon" />
            Kirish
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
