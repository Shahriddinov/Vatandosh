import { Link, useLocation, useParams } from "react-router-dom";

function Nav({ navData }) {
  const location = useLocation();
  const { id } = useParams();
  const editClass = location.pathname.split("/");
  return (
    <div className="nav">
      <div className="container">
        <div
          className="nav__inner"
          style={{
            borderBottomColor:
              editClass.length <= 3 || id !== undefined
                ? "transparent"
                : "#eaedf6",
          }}>
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
    </div>
  );
}
export default Nav;
