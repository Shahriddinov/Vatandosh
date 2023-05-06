import React from 'react';
import "./Table.scss"
import Top from "../../../../assets/images/top.png"
import Next from "../../../../assets/images/next.png"
import BottonIcon from "../../../../assets/images/bottomIcon.png"
import Alls from "../../../../assets/images/alls.png"
import { useTranslation } from 'react-i18next';

function Table(props) {
    const {t} = useTranslation();
    return (
        <div className="table" data-aos="zoom-out"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1000">
            <div className="table_control">
                <div className="table_control_all">
                    {t("aboutPage.section4.cardntk")}
                </div>
                <img src={Top} alt=""/>
                <div className="table_control_all">
                    {t("aboutPage.section4.cardvk")}
                </div>
            </div>
            <img className="table_next" src={Next} alt=""/>
            <div className="table_control">
                <div className="table_control_all">
                    {t("aboutPage.section4.cardfb")}
                </div>
            </div>
            <img className="table_next" src={BottonIcon} alt=""/>

            <div className="table_control">
                <div className="table_control_all">
                    {t("aboutPage.section4.cardy")}
                </div>
                <img src={Top} alt=""/>
                <div className="table_control_all">
                    {t("aboutPage.section4.cardbr")}
                </div>
            </div>
            <img className="table_next" src={Next} alt=""/>

            <div className="table_control">
                <div className="table_control_all increase">
                    {t("aboutPage.section4.carda")}
                </div>
                <div className="table_control_all increase">
                    {t("aboutPage.section4.cardby")}
                </div>
                <div className="table_control_all increase">
                    {t("aboutPage.section4.cardb")}
                </div>
                <div className="table_control_all increase">
                    {t("aboutPage.section4.cardsh")}
                </div>
                <div className="table_control_all">
                    {t("aboutPage.section4.cardmk")}
                </div>
            </div>
            <img src={Alls} alt=""/>
            <div className="table_control">
                <div className="table_control_all increase">
                    {t("aboutPage.section4.cardxb")}
                </div>
                <div className="table_control_all increase">
                    {t("aboutPage.section4.cardv")}
                </div>
                <div className="table_control_all increase">
                    {t("aboutPage.section4.cardv2")}
                </div>
                <div className="table_control_all increase">
                    {t("aboutPage.section4.cardmm")}
                </div>
                <div className="table_control_all">
                    {t("aboutPage.section4.cardbb")}
                </div>
            </div>
        </div>
    );
}

export default Table;