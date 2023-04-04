import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const editClass = location.pathname;
  return (
    <div className="nav">
      <div className="container">
        <ul>
          <li>
            <Link
              to="/expert"
              className={editClass === "/expert" ? `nav-link` : `nav--link`}
            >
              ASOSIY
            </Link>
          </li>
          <li>
            <Link
              to="/expert/employe"
              className={editClass === "/expert" ? `nav-link` : `nav--link`}
            >
              Ekspertlar kengashi
            </Link>
          </li>
          <li>
            <Link
              to="/expert/offers"
              className={editClass === "/expert" ? `nav-link` : `nav--link`}
            >
              Takliflar
            </Link>
          </li>
          <li>
            <Link
              to="/expert/contact"
              className={editClass === "/expert" ? `nav-link` : `nav--link`}
            >
              Bog‘lanish
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
