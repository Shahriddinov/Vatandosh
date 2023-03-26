import React from 'react'
import OfferStatesFriendship from "../components/offerStatesFriendship"
import SiteHero from '../../../component/siteHero/SiteHero'
import StatesFriendshipInfo from '../components/statesFriendshipInfo'
import bgImg from "../../../assets/images/compatriots/chehiya.png"

import WhriteHeader from "../../../component/Layout/WhriteHeader/WhriteHeader";
import { MiniSlider } from '../../../component/miniSlider/MiniSlider'
import { useTranslation } from 'react-i18next'

import { useAssociationFetching } from '../hooks/useAssociationFetching'

import "./statesFriendshipSociety.scss"

const StatesFriendshipSociety = () => {
  const {associationData,associationCategoryData,error,associationLoading,associationCategoryLoading} = useAssociationFetching()
  console.log(associationData);
  const {t} = useTranslation()
  const dataHero = {
    title: "Qirgʼiziston-Oʼzbekiston doʼstlik jamiyati",
    description: "Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini yuksaltirish, milliy o‘zlikni saqlab qolish, ",
    pagePath:[
      {id:1, label:"Asosiy sahifa",path: "/"},
      {id:1, label:"Jamoat birlashmalar", path: "/compatriots/public-associations"},
      {id:1, label:"Qirgʼiziston-Oʼzbekiston doʼstlik jamiyati", path: null},
    ]
  }

  return (
    <>
      <div className='state-friendship-society'>
        <div className="state-friendship-society__head" style={{backgroundImage: `url(${bgImg})`}}>
          <WhriteHeader/>
          <SiteHero {...dataHero}/>
        </div>

        <main className='main'>
          <StatesFriendshipInfo/>
          <OfferStatesFriendship/>
          <MiniSlider title={`${t("event")}`}/>
        </main>
      </div>
    </>
  )
}

export default StatesFriendshipSociety