import React from 'react'
import OfferStatesFriendship from "../components/offerStatesFriendship"
import SiteHero from '../../../component/siteHero/SiteHero'
import StatesFriendshipInfo from '../components/statesFriendshipInfo'

import "./statesFriendshipSociety.scss"
import WhriteHeader from "../../../component/Layout/WhriteHeader/WhriteHeader";
import { MiniSlider } from '../../../component/miniSlider/MiniSlider'
import { useTranslation } from 'react-i18next'

import img from "../../../assets/images/compatriots/state-friendship-bg.png"

const StatesFriendshipSociety = () => {
  const {t} = useTranslation()
  const dataHero = {
    title: "Qirgʼiziston-Oʼzbekiston doʼstlik jamiyati",
    description: "Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, ",
    pagePath:[
      {id:1,label:"Asosiy sahifa",path: "/"},
      {id:1,label:"Jamoat birlashmalar",path: "/compatriots/public-associations"},
      {id:1,label:"Qirgʼiziston-Oʼzbekiston doʼstlik jamiyati",path: null},
    ]
  }

  return (
    <>
    <div className='state-friendship-society' style={
      {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 0,
      width: "100%",
      height: "740px",
      backgroundImage: `url(${img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      content: "",
    }
    }/>
      <div className='state-friendship-society'>
        <WhriteHeader/>

        <main className='main'>
          <SiteHero {...dataHero}/>
          <StatesFriendshipInfo/>
          <OfferStatesFriendship/>
          <MiniSlider title={`${t("event")}`}/>
        </main>
      </div>
    </>
  )
}

export default StatesFriendshipSociety