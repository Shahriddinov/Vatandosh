import "./Nav.scss";
import { useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const editClass = location.pathname;
  return (
    <div className="nav">
      <div className="container">
        <ul>
          <li>
            <a
              href="#"
              className={editClass === "/portal/export" ? `nav-link` : `nav--link`}>
              ASOSIY
            </a>
          </li>
          <li>
            <a
              href="#"
              className={editClass === "/portal/export" ? `nav-link` : `nav--link`}>
              Ekspertlar kengashi
            </a>
          </li>
          <li>
            <a
              href="#"
              className={editClass === "/portal/export" ? `nav-link` : `nav--link`}>
              Takliflar
            </a>
          </li>
          <li>
            <a
              href="#"
              className={editClass === "/portal/export" ? `nav-link` : `nav--link`}>
              Bog‘lanish
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
