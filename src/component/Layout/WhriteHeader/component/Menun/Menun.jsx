import React, { useEffect, useRef, useState } from "react";
import "./menun.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavBarLinks } from "../../../../NavBarLinks";
import { useSelector } from "react-redux";
import { baseServerUrl } from "../../../../../services/api/utils";

const Menun = () => {
  const navLinks = NavBarLinks();
  const data = useSelector((store) => store.singleSlice.projectsData);
  const lan = useSelector((state) => state.language.language);

  const navbarRef = useRef();
  const scrollRef = useRef(null);
  const [isFixeds, setFixeds] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    scrollRef.current = document.querySelector(".navbar").offsetTop + 18;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 92) {
        setFixeds(true);
      } else {
        setFixeds(false);
      }
    });
  }, [scrollRef.current]);

  const [about, setAbout] = React.useState(null);
  const openAbout = Boolean(about);

  const [citizin, setCitizin] = React.useState(null);
  const openCitizin = Boolean(citizin);
  const [events, setEvents] = React.useState(null);
  const openEvents = Boolean(events);

  const [information, setInformation] = React.useState(null);
  const openInformation = Boolean(information);

  const [project, setProject] = React.useState(null);
  const openProject = Boolean(project);

  const handleClickAbout = (event) => {
    setAbout(event.currentTarget);
  };
  const handleCloseAbout = () => {
    setAbout(null);
  };

  const handleClickInformation = (event) => {
    setInformation(event.currentTarget);
  };
  const handleCloseInformation = () => {
    setInformation(null);
  };

  const handleClickCitizin = (event) => {
    setCitizin(event.currentTarget);
  };
  const handleCloseCitizin = () => {
    setCitizin(null);
  };
  const handleEvent = (event) => {
    setEvents(event.currentTarget);
  };
  const handleCloseEvent = () => {
    setEvents(null);
  };

  const handleClickProject = (event) => {
    setProject(event.currentTarget);
  };
  const handleCloseProject = () => {
    setProject(null);
  };

  return (
    <div className={`navbar ${isFixeds ? "fixed" : ""}`} ref={navbarRef}>
      <ul className="menu">
        <li className="menu_item hov">
          <Button
            id="basic-button"
            aria-controls={openAbout ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openAbout ? "true" : undefined}
            onClick={handleClickAbout}
            className="menu_link"
          >
            {navLinks[0].title}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={about}
            open={openAbout}
            onClose={handleCloseAbout}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              onMouseLeave: handleCloseAbout,
            }}
          >
            {navLinks[0].links?.map((el, index) => {
              return (
                <MenuItem key={index} onClick={handleCloseAbout}>
                  <div className="navMenuInnerWrapper">
                    <img src={el.icon} alt="icons" />
                    <Link to={el.url} className="menus_links">
                      {el.title}
                    </Link>
                  </div>
                </MenuItem>
              );
            })}
          </Menu>
        </li>

        <li className="menu_item hov">
          <Button
            id="basic-button"
            aria-controls={openCitizin ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openCitizin ? "true" : undefined}
            onClick={handleClickCitizin}
            className="menu_link"
          >
            {navLinks[1].title}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={citizin}
            open={openCitizin}
            onClose={handleCloseCitizin}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              onMouseLeave: handleCloseCitizin,
            }}
          >
            {navLinks[1].links?.map((el, index) => {
              return (
                <MenuItem onClick={handleCloseAbout} key={index}>
                  <div className="navMenuInnerWrapper">
                    <img src={el.icon} alt="icons" />
                    <Link to={el.url} className="menus_links">
                      {el.title}
                    </Link>
                  </div>
                </MenuItem>
              );
            })}
          </Menu>
        </li>

        <li className="menu_item hov">
          <Button
            id="basic-button"
            aria-controls={openProject ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openProject ? "true" : undefined}
            onClick={handleClickProject}
            className="menu_link"
          >
            {navLinks[2].title}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={project}
            open={openProject}
            onClose={handleCloseProject}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              onMouseLeave: handleCloseProject,
            }}
          >
            <MenuItem onClick={handleCloseAbout}>
              <div className="navMenuInnerWrapper">
                <img src={navLinks[2].links[0].icon} alt="icons" />
                <Link to={navLinks[2].links[0].url} className="menus_links">
                  {navLinks[2].links[0].title}
                </Link>
              </div>
            </MenuItem>
            {data?.map((el) => (
              <MenuItem onClick={handleCloseProject} key={el?.id}>
                <div className="navMenuInnerWrapper">
                  <img src={`${baseServerUrl + "/" + el?.logo}`} alt="icons" />
                  <Link
                    to={`/projects/columns?=${el?.id}`}
                    className="menus_links"
                  >
                    {el[`menu_${lan}`]}
                  </Link>
                </div>
              </MenuItem>
            ))}
          </Menu>
        </li>

        <li className="menu_item hov ">
          <Button
            id="basic-button"
            aria-controls={openEvents ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openEvents ? "true" : undefined}
            onClick={handleEvent}
            className="menu_link"
          >
            {navLinks[3].title}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={events}
            open={openEvents}
            onClose={handleCloseEvent}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              onMouseLeave: handleCloseEvent,
            }}
          >
            {navLinks[3].links?.map((el, index) => {
              return (
                <MenuItem onClick={handleCloseEvent} key={index}>
                  <div className="navMenuInnerWrapper">
                    <img src={el.icon} alt="icons" />
                    <Link to={el.url} className="menus_links">
                      {el.title}
                    </Link>
                  </div>
                </MenuItem>
              );
            })}
          </Menu>
        </li>
        <li className="menu_item hov">
          <Button
            id="basic-button"
            aria-controls={openInformation ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openInformation ? "true" : undefined}
            onClick={handleClickInformation}
            className="menu_link"
          >
            {navLinks[4].title}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={information}
            open={openInformation}
            onClose={handleCloseInformation}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              onMouseLeave: handleCloseProject,
            }}
          >
            {navLinks[4].links?.map((el, index) => {
              return (
                <MenuItem key={index} onClick={handleCloseAbout}>
                  <div className="navMenuInnerWrapper">
                    <img src={el.icon} alt="icons" />
                    <Link to={el.url} className="menus_links">
                      {el.title}
                    </Link>
                  </div>
                </MenuItem>
              );
            })}
          </Menu>
        </li>
        <li className="menu_item">
          <Link to="/faq" className="menu_link">
            {t("faq")}
          </Link>
        </li>
        <li className="menu_item">
          <Link to="/contact" className="menu_link">
            {t("link")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menun;
