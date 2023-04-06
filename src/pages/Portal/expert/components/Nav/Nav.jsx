import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";

function Nav({ navData }) {
  const location = useLocation();
  const editClass = location.pathname.split("/");
  return (
    <div className="nav">
      <div className="container">
        <ul>
          {navData?.map((navItem) => (
            <li key={navItem.id}>
              <Link
                to={navItem.url}
                className={editClass.length <= 3 ? `nav-link` : `nav--link`}
              >
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Nav;
