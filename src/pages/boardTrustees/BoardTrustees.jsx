import React, { useEffect } from 'react'
import "./boardTrustees.scss"


import CouncilHero from './components/council-hero/CouncilHero'
import CouncilComposition from './components/council-composition/CouncilComposition'
import ContactUs from '../../component/ContactUs/ContactUs'
import { useDispatch } from 'react-redux'
import { getAllTrustees } from '../../reduxToolkit/trusteesSlice/trusteesAsyncThunk'
import Header from '../../component/Layout/Header/Header'
import WhriteHeader from "../../component/Layout/WhriteHeader/WhriteHeader";

const BoardTrustees = () => {

  const dispatch = useDispatch()
  const heroData = {
    title:"Vasiylik kengashi",
    description:"Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali yo‘naltirish Fondning asosiy maqsadlaridan biri hisoblanadi.",
    pagePath: "Vasiylik kengashi",
  }

  useEffect(() => {
    dispatch(getAllTrustees())
  },[])
  
  return (
    <div className="council-trustees">
      <div className="page-about">
          <WhriteHeader/>
          <CouncilHero  {...heroData}/>
      </div>
      <CouncilComposition/>
    </div>
  )
}

export default BoardTrustees