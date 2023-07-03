import "./Nav.scss";
import { Link, useLocation, useParams } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

function Nav({ navData }) {
  const location = useLocation();
  const { communityCountryId } = useParams();
  const editClass = location.pathname.split("/");

  return (
    <div className="nav">
      <div className="container">
        <div
          className="nav__inner"
          style={{
            borderBottomColor:
              editClass.length <= 3 || communityCountryId !== undefined
                ? "transparent"
                : "#eaedf6",
          }}
        >
          <ul>
            {navData?.map((navItem, index) => {
              if (index === 1 && editClass[2] === "expert") {
                return (
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <>
                        <li
                          {...bindTrigger(popupState)}
                          className={
                            editClass.length <= 3 ||
                            communityCountryId !== undefined
                              ? `nav-link`
                              : `nav--link`
                          }
                        >
                          {navItem.label}
                        </li>
                        <Menu {...bindMenu(popupState)}>
                          {navItem?.data.length &&
                            navItem?.data.map((el) => (
                              <Link
                                to={`/portal-category/expert/council-about/${el.id}`}
                              >
                                <MenuItem
                                  onClick={popupState.close}
                                  key={el.id}
                                >
                                  {el.title}
                                </MenuItem>
                              </Link>
                            ))}
                        </Menu>
                      </>
                    )}
                  </PopupState>
                );
              } else {
                return (
                  <li key={navItem.id}>
                    <Link
                      to={navItem.url}
                      className={
                        editClass.length <= 3 ||
                        communityCountryId !== undefined
                          ? `nav-link`
                          : `nav--link`
                      }
                    >
                      {navItem.label}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Nav;
