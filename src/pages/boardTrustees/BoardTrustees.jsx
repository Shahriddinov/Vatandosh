import React from 'react'
import "./board-trustees.scss"


import CouncilHero from './components/council-hero/CouncilHero'
import CouncilComposition from './components/council-composition/CouncilComposition'
import ContactUs from '../../component/ContactUs/ContactUs'

const BoardTrustees = () => {
  return (
    <div className="council-trustees ">
      <CouncilHero/>
      <CouncilComposition/>
      <ContactUs/>
    </div>
  )
}

export default BoardTrustees