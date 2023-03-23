import React, {useEffect, useRef, useState} from "react";
import "./menus.scss";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Menus = () => {
    const navbarRef = useRef();
    const scrollRef = useRef(null);
    const [isFixed, setFixed] = useState(false);
    const {t} = useTranslation();

    const [about, setAbout] = React.useState(null);
    const openAbout = Boolean(about);

    const [citizin, setCitizin] = React.useState(null);
    const openCitizin = Boolean(citizin);


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

    const handleClickProject = (event) => {
        setProject(event.currentTarget);
    };
    const handleCloseProject = () => {
        setProject(null);
    };


    useEffect(() => {
        scrollRef.current = document.querySelector(".navbar").offsetTop + 18;
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= 92) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        });
    }, [scrollRef.current]);


    return (
        <div className={`navbar ${isFixed ? "fixed" : ""}`} ref={navbarRef}>
            <ul className="menus">

                <li className="menus_item hov">
                    <Button
                        id="basic-button"
                        aria-controls={openAbout ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openAbout ? 'true' : undefined}
                        onClick={handleClickAbout}
                        className="menus_link"
                    >
                        {t("about")}
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={about}
                        open={openAbout}
                        onClose={handleCloseAbout}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleCloseAbout}>
                            <Link to="/about" className="menus_links">
                                Biz haqimizda

                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseAbout}>
                            <Link to="/about/council-trustees" className="menus_links">
                                Vasiylik Kengashi</Link>
                        </MenuItem>

                    </Menu>
                </li>

                <li className="menus_item hov">
                    <Button
                        id="basic-button"
                        aria-controls={openCitizin ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openCitizin ? 'true' : undefined}
                        onClick={handleClickCitizin}
                        className="menus_link"
                    >
                        {t("citizin")}
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={citizin}
                        open={openCitizin}
                        onClose={handleCloseCitizin}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleCloseCitizin}>
                            <Link to="/compatriots/public-associations" className="menus_links">
                                Jamoat birlashmalar</Link>


                        </MenuItem>
                        <MenuItem onClick={handleCloseCitizin}>
                            <Link to="/category-shows" className="menus_links">
                                Turkum ko'rsatuvlar</Link>

                        </MenuItem>
                        <MenuItem onClick={handleCloseCitizin}>
                            <Link to="/compatriots/public-association-events" className="menus_links">
                                Jamoat birlashmalar tadbirlari</Link>

                        </MenuItem>

                    </Menu>
                </li>

                <li className="menus_item hov">
                    <Button
                        id="basic-button"
                        aria-controls={openProject ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openProject ? 'true' : undefined}
                        onClick={handleClickProject}
                        className="menus_link"
                    >
                        {t("projects")}
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={project}
                        open={openProject}
                        onClose={handleCloseProject}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleCloseProject}>
                            <Link to="/projects" className="menus_links">
                                Barcha loyihalar</Link>

                        </MenuItem>
                        <MenuItem onClick={handleCloseProject}>“Kun oilasi” rukni</MenuItem>
                        <MenuItem onClick={handleCloseProject}>“Sportchi vatandsohlar” rukni</MenuItem>
                        <MenuItem onClick={handleCloseProject}>Sara durdona</MenuItem>
                        <MenuItem onClick={handleCloseProject}>“Xorijdagi milliy oshxona” loyihasi</MenuItem>
                        <MenuItem onClick={handleCloseProject}>“Xorijdagi vatandosh tashkilot” loyihasi</MenuItem>

                    </Menu>
                </li>

                <li className="menus_item ">
                    <Link to="/" className="menus_link">
                        {t("contects")}
                    </Link>

                </li>
                <li className="menus_item hov">
                    <Button
                        id="basic-button"
                        aria-controls={openInformation ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openInformation ? 'true' : undefined}
                        onClick={handleClickInformation}
                        className="menus_link"
                    >
                        <Link to="/" className="menus_link">
                            {t("information")}
                        </Link>

                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={information}
                        open={openInformation}
                        onClose={handleCloseInformation}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleCloseInformation}>Yangiliklar</MenuItem>
                        <MenuItem onClick={handleCloseInformation}>Tadbirlar</MenuItem>
                        <MenuItem onClick={handleCloseInformation}>Mediateka</MenuItem>
                        <MenuItem onClick={handleCloseInformation}>Infografika</MenuItem>
                        <MenuItem onClick={handleCloseInformation}>Vatandoshlar jurnali</MenuItem>

                    </Menu>
                </li>


                <li className="menus_item">
                    <Link to="/" className="menus_link">
                        {t("link")}
                    </Link>
                </li>
                <li className="menus_item">
                    ...
                </li>
            </ul>
        </div>
    );
};

export default Menus;
