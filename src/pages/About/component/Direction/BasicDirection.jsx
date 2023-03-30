import React from 'react';
import Partner from "../../../../assets/images/partner.svg";
import Partners from "../../../../assets/images/partnerWhite.svg";
import Law from "../../../../assets/images/huquq.svg";
import Laws from "../../../../assets/images/huquqWhite.svg";
import Til from "../../../../assets/images/til.svg";
import Language from "../../../../assets/images/language.svg";
import Book from "../../../../assets/images/book.svg";
import BookWhite from "../../../../assets/images/bookWhite.svg";
import Student from "../../../../assets/images/student.svg";
import Students from "../../../../assets/images/studentWhite.svg";
import Child from "../../../../assets/images/childs.svg";
import Childs from "../../../../assets/images/childsWhite.svg";
import Home from "../../../../assets/images/home/Home.svg";
import Homes from "../../../../assets/images/home/HomeWhite.svg";
import Togather from "../../../../assets/images/home/Togather.svg";
import Togathers from "../../../../assets/images/home/TogetherWhite.svg";
import StarBag from "../../../../assets/images/home/starBag.svg";
import StarBags from "../../../../assets/images/home/starBagWhite.svg";
import Latter from "../../../../assets/images/home/latter.svg";
import Latters from "../../../../assets/images/home/latterWhite.svg";
import ThreeStar from "../../../../assets/images/home/threeStar.svg";
import ThreeStars from "../../../../assets/images/home/threeStarWhite.svg";
import Char from "../../../../assets/images/home/Char.svg";
import Chars from "../../../../assets/images/home/CharWhite.svg";
import "./style.scss"
import WhriteHeader from "../../../../component/Layout/WhriteHeader/WhriteHeader";
import CouncilHero from "../../../boardTrustees/components/council-hero/CouncilHero";
import {useTranslation} from "react-i18next";

function BasicDirection(props) {
    const {t} = useTranslation();
    const heroData = {
        title: `Fond faoliyatining asosiy yo‘nalishlari`,
        description: `Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi.`,
        pagePath: `Yo'nalishlar`,
    }
    const Ditrections = [
        {
            imgs: Partner,
            title: `${t("aboutPage.section3.card1-left")}`,
            backgroundImg: Partners
        },
        {
            imgs: Law,
            title: `${t("aboutPage.section3.card1-right")}`,
            backgroundImg: Laws
        },
        {
            imgs: Til,
            title: `${t("aboutPage.section3.card2-left")}`,
            backgroundImg: Language
        },
        {
            imgs: Book,
            title: `${t("aboutPage.section3.card2-right")}`,
            backgroundImg: BookWhite
        },
        {
            imgs: Student,
            title: `${t("aboutPage.section3.card3-left")}`,
            backgroundImg: Students
        },
        {
            imgs: Child,
            title: `${t("aboutPage.section3.card3-right")}`,
            backgroundImg: Childs
        },
        {
            imgs: Home,
            title: `${t("aboutPage.section3.card4-left")}`,
            backgroundImg: Homes
        },

        {
            imgs: Togather,
            title: `${t("aboutPage.section3.card4-right")}`,
            backgroundImg: Togathers
        },
        {
            imgs: StarBag,
            title: `${t("aboutPage.section3.card5-left")}`,
            backgroundImg: StarBags
        },
        {
            imgs: Latter,
            title: `${t("aboutPage.section3.card5-right")}`,
            backgroundImg: Latters
        },
        {
            imgs: ThreeStar,
            title: `${t("aboutPage.section3.card6-left")}`,
            backgroundImg: ThreeStars
        },
        {
            imgs: Char,
            title: `${t("aboutPage.section3.card6-right")}`,
            backgroundImg: Chars
        },


    ]
    return (
        <>
            <div className="page-about">
                <WhriteHeader/>
                <CouncilHero  {...heroData}/>
            </div>

            <div className="about_basics container">Asosiy yo'nalishlar</div>
            <div className="about_direction_cards container">

                {Ditrections.map((item, index) => (

                    <div key={index} className="about_direction_cards_boxs">

                        <img src={item.imgs} alt="partner"/>
                        <div className="about_direction_cards_boxs_describtion">{item.title}</div>
                        <img className="about_direction_cards_boxs_img" src={item.backgroundImg} alt=""/>
                    </div>
                ))}


            </div>
        </>
    );
}

export default BasicDirection;