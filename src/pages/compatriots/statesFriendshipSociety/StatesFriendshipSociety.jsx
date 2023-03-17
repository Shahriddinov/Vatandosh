import React from 'react'

import "./statesFriendshipSociety.scss"
import Header from '../../../component/Layout/Header/Header'
import SiteHero from '../../../component/siteHero/SiteHero'

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
      <Header/>

      <main className='main'>
        <SiteHero {...dataHero}/>
      </main>
    </div>
  )
}

export default StatesFriendshipSociety