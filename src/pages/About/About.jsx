import React from "react";
import "./About.scss";
import CouncilHero from "../boardTrustees/components/council-hero/CouncilHero";
import Header from "../../component/Layout/Header/Header";

const About = () => {
    const heroData = {
        title: "Biz haqimizda",
        description: "Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi.",
        pagePath: "Biz haqimizda",
    }
    return (
        <div className="about page-about">
            <Header/>
            <CouncilHero  {...heroData}/>
        </div>
    );
};
export default About;
