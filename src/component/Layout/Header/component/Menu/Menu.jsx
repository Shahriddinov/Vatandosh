import React, {useEffect, useRef, useState} from "react";
import "./menu.scss";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
const Menu = () => {
    const navbarRef = useRef();
    const scrollRef = useRef(null);
    const [isFixed, setFixed] = useState(false);
    const {t} = useTranslation();

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



    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Biz haqimizda
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Vasiylik Kengashi
                </a>
            ),
        },

    ];

    return (
        <div className={`navbar ${isFixed ? "fixed" : ""}`} ref={navbarRef}>
            <ul className="menu">

                    <Dropdown menu={{ items }} placement="bottom" arrow className="menu_item hov">
                        <Link to="/about" className="menu_link">
                            {t("about")}
                        </Link>
                    </Dropdown>


                {/*</motion.li>*/}
                <li className="menu_item hov">
                    <Link to="/" className="menu_link">
                        {t("citizin")}
                    </Link>
                    <ul className="main">
                        <li>Jamoat birlashmalar</li>
                        <li>Turkum ko'rsatuvlar</li>
                        <li>Jamoat birlashmalar tadbirlari</li>

                    </ul>
                </li>
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

export default Menu;
