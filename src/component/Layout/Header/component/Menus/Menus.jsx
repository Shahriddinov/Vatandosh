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



    const handleClickAbout = (event) => {
        setAbout(event.currentTarget);
    };
    const handleCloseAbout = () => {
        setAbout(null);
    };



    const handleClickCitizin = (event) => {
        setCitizin(event.currentTarget);
    };
    const handleCloseCitizin = () => {
        setCitizin(null);
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


                {/*<li className="menu_item hov">*/}
                {/*    <Link to="/" className="menu_link">*/}
                {/*        {t("citizin")}*/}
                {/*    </Link>*/}
                {/*    <ul className="main">*/}
                {/*        <li>Jamoat birlashmalar</li>*/}
                {/*        <li>Turkum ko'rsatuvlar</li>*/}
                {/*        <li>Jamoat birlashmalar tadbirlari</li>*/}

                {/*    </ul>*/}
                {/*</li>*/}
                <li className="menu_item hov">
                    <Link to="/" className="menu_link">
                        {t("projects")}
                    </Link>
                    <ul className="main">
                        <li>Barcha loyihalar</li>
                        <li>“Kun oilasi” rukni</li>
                        <li>“Sportchi vatandsohlar” rukni</li>
                        <li>“Sportchi vatandsohlar” rukni</li>
                        <li>Sara durdona</li>
                        <li>“Xorijdagi milliy oshxona” loyihasi</li>
                        <li>“Xorijdagi vatandosh tashkilot” loyihasi</li>

                    </ul>
                </li>
                <li className="menu_item ">
                    <Link to="/" className="menu_link">
                        {t("contects")}
                    </Link>

                </li>
                <li className="menu_item hov">
                    <Link to="/" className="menu_link">
                        {t("information")}
                    </Link>
                    <ul className="main">
                        <li>Yangiliklar</li>
                        <li>Tadbirlar</li>
                        <li>Mediateka</li>
                        <li>Infografika</li>
                        <li>Vatandoshlar jurnali</li>

                    </ul>
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

export default Menus;
