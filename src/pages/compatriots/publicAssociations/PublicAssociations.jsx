import React from 'react'
import CouncilHero from '../../boardTrustees/components/council-hero/CouncilHero'
import Associations from '../components/associations/Associations'

import "./publicAssociations.scss"
import WhriteHeader from "../../../component/Layout/WhriteHeader/WhriteHeader";

const PublicAssociations = () => {
    const heroData = {
        title: "Jamoat birlashmalar",
        description: "Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi.",
        pagePath: "Jamoat birlashmalar",
    }

    return (
        <div className='public-associations'>
            <div className="page-about">
                <WhriteHeader/>
                <CouncilHero {...heroData}/>
            </div>
            
            <Associations/>
        </div>
    )
}

export default PublicAssociations