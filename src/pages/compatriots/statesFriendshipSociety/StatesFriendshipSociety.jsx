import React from 'react'
import OfferStatesFriendship from "../components/offerStatesFriendship"
import Header from '../../../component/Layout/Header/Header'
import SiteHero from '../../../component/siteHero/SiteHero'
import StatesFriendshipInfo from '../components/statesFriendshipInfo'
import ContactUs from '../../../component/ContactUs/ContactUs'
import CompositionEvent from "../components/compatriotsEvents/CompatriotsEvents"

import "./statesFriendshipSociety.scss"
import WhriteHeader from "../../../component/Layout/WhriteHeader/WhriteHeader";

const StatesFriendshipSociety = () => {
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
    <div className='state-friendship-society'>
      <WhriteHeader/>

      <main className='main'>
        <SiteHero {...dataHero}/>
        <StatesFriendshipInfo/>
        <OfferStatesFriendship/>
        <CompositionEvent/>
      </main>
    </div>
  )
}

export default StatesFriendshipSociety