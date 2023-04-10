import "./Nav.scss";
import { Link } from "react-router-dom";

function Nav({ navData }) {
  return (
    <div className="nav">
      <div className="container">
        <ul>
          {navData?.map((navItem) => (
            <li key={navItem.id}>
              <Link to={navItem.url} className="nav--link">
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
