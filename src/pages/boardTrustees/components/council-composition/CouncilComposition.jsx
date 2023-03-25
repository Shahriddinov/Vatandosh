import React from 'react'
import "./councilComposition.scss"

import CouncilCard from"../council/CouncilCard"
import arrowDown from "../../../../assets/images/about/arrov-down.svg"
import { useSelector } from 'react-redux'

const CouncilComposition = () => {
  const allTrustees = useSelector(state => state.trustees.allTrustees);
  
  return (
    <section className="council-composition">
        <div className="council-composition__container container">
          <div className="council-composition__inner">
            <h2 className="council-composition__title">Kengash tarkibi</h2>

            <ul className="council-composition__list">
              {
                allTrustees?.map(el => (
                  <li className="council-composition__item" key={el.id}>
                    <CouncilCard trustee={el}/>
                  </li>
                ))
              }
            </ul>

            <button className="council-composition__btn">
              <img src={arrowDown} alt="" />
              <span  className="council-composition__btn--span">Ko’proq ko’rish</span>
            </button>
          </div>
        </div>
    </section>
  )
}

export default CouncilComposition