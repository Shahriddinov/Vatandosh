import React from 'react'
import "./boardTrustees.scss"


import CouncilHero from './components/council-hero/CouncilHero'
import CouncilComposition from './components/council-composition/CouncilComposition'
import ContactUs from '../../component/ContactUs/ContactUs'

const BoardTrustees = () => {
  const heroData = {
    title:"Vasiylik kengashi",
    description:"Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi.",
    pagePath: "Vasiylik kengashi",
  }
  return (

    
  
    <div className="council-trustees">
      <CouncilHero  {...heroData}/>
      <CouncilComposition/>
      <ContactUs/>
    </div>
  )
}

export default BoardTrustees