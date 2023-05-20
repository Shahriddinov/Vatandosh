// import "./Nav.scss";
import { Link, useLocation, useParams } from "react-router-dom";

function Nav({ navData }) {
  const location = useLocation();
  const { communityCountryId } = useParams();
  const editClass = location.pathname.split("/");

  return (
    <div className="nav" style={{ padding: "0" }}>
      <div className="container">
        <div
          className="nav__inner"
          style={{
            borderBottomColor:
              editClass.length <= 3 || communityCountryId !== undefined
                ? "transparent"
                : "#eaedf6",
            padding: "14px",
          }}
        >
          <ul>
            {navData?.map((navItem) => (
              <li key={navItem.id}>
                <Link
                  to={navItem.url}
                  className={
                    editClass.length <= 3 || communityCountryId !== undefined
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
    </div>
  );
}
export default Nav;
