import "./Nav.scss";
import { Link, useLocation, useParams } from "react-router-dom";

function Nav({ navData }) {
  const location = useLocation();
  const { id } = useParams();
  const editClass = location.pathname.split("/");
  return (
    <div className="nav">
      <div className="container">
        <ul>
          {navData?.map((navItem) => (
            <li key={navItem.id}>
              <Link
                to={navItem.url}
                className={
                  editClass.length <= 3 || id !== undefined
                    ? `nav-link`
                    : `nav--link`
                }
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
