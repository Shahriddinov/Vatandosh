import React from 'react';
import "./faq.scss"
import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";
import CouncilHero from "../boardTrustees/components/council-hero/CouncilHero";

function Faq(props) {
    const heroData = {
        title: `FAQ`,
        description: `Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi.`,
        // pagePath: `Yo'nalishlar`,
    }
    return (
        <>
            <div className="page-about">
                <WhriteHeader/>
                <CouncilHero  {...heroData}/>
            </div>
            FAQ
        </>
    );
}

export default Faq;