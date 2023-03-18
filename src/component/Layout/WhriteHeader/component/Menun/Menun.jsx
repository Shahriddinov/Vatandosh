import React, {useEffect, useRef, useState} from "react";
import "./menun.scss";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Menun = () => {
    const navbarRef = useRef();
    const scrollRef = useRef(null);
    const [isFixeds, setFixeds] = useState(false);
    const {t} = useTranslation();

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





    return (
        <div className={`navbar ${isFixeds ? "fixed" : ""}`} ref={navbarRef}>
            <ul className="menu">

                <li className="menu_item hov">
                    <Button
                        id="basic-button"
                        aria-controls={openAbout ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openAbout ? 'true' : undefined}
                        onClick={handleClickAbout}
                        className="menu_link"
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
                        <MenuItem href="/about" onClick={handleCloseAbout}>Biz haqimizda</MenuItem>
                        <MenuItem onClick={handleCloseAbout}>Vasiylik Kengashi</MenuItem>

                    </Menu>
                </li>

                <li className="menu_item hov">
                    <Button
                        id="basic-button"
                        aria-controls={openCitizin ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openCitizin ? 'true' : undefined}
                        onClick={handleClickCitizin}
                        className="menu_link"
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
                        <MenuItem onClick={handleCloseCitizin}>Jamoat birlashmalar</MenuItem>
                        <MenuItem onClick={handleCloseCitizin}>Turkum ko'rsatuvlar</MenuItem>
                        <MenuItem onClick={handleCloseCitizin}>Jamoat birlashmalar tadbirlari</MenuItem>

                    </Menu>
                </li>

                <li className="menu_item hov">
                    <Button
                        id="basic-button"
                        aria-controls={openProject ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openProject ? 'true' : undefined}
                        onClick={handleClickProject}
                        className="menu_link"
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
                        <MenuItem onClick={handleCloseProject}>Barcha loyihalar</MenuItem>
                        <MenuItem onClick={handleCloseProject}>“Kun oilasi” rukni</MenuItem>
                        <MenuItem onClick={handleCloseProject}>“Sportchi vatandsohlar” rukni</MenuItem>
                        <MenuItem onClick={handleCloseProject}>Sara durdona</MenuItem>
                        <MenuItem onClick={handleCloseProject}>“Xorijdagi milliy oshxona” loyihasi</MenuItem>
                        <MenuItem onClick={handleCloseProject}>“Xorijdagi vatandosh tashkilot” loyihasi</MenuItem>

                    </Menu>
                </li>

                <li className="menu_item ">
                    <Link to="/" className="menu_link">
                        {t("contects")}
                    </Link>

                </li>
                <li className="menu_item hov">
                    <Button
                        id="basic-button"
                        aria-controls={openInformation ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openInformation ? 'true' : undefined}
                        onClick={handleClickInformation}
                        className="menu_link"
                    >
                        {t("information")}
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


                <li className="menu_item">
                    <Link to="/" className="menu_link">
                        {t("link")}
                    </Link>
                </li>
                <li className="menu_item">
                    ...
                </li>
            </ul>
        </div>
    );
};

export default Menun;
