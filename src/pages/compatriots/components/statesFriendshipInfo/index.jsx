import React from 'react'

import userImg from "../../../../assets/images/compatriots/states-friendship-user.png"
import logoImg from "../../../../assets/images/compatriots/logo.png"

import "./statesFriendship.scss"

const StatesFriendshipInfo = () => {
  return (
    <section className='friendship-info'>
        <div className="friendship-info__container container">
            <div className="friendship-info__inner">
                <div className="friendship-info__box1">
                    <div className="friendship-info__box1_img">
                        <img className='friendship-info__company_logo' src={logoImg} alt="Fransiya oʻzbek vatandoshlarining “Meros” uyushmasi" />
                    </div>

                   <h3 className="friendship-info__company_name">Fransiya oʻzbek vatandoshlarining “Meros” uyushmasi</h3>
                </div>

                <div className="friendship-info__box2">
                    <div className="friendship-info__user_img">
                        <img className='friendship-info__user' src={userImg} alt="Fattaxov Baxtiyarjan Аzizovich" />
                    </div>

                    <ul className="friendship-info__list">
                        <li className="friendship-info__item">
                            <span className='friendship-info__item--text1'>Rahbar</span>
                            <span className='friendship-info__item--text2'>Fattaxov Baxtiyarjan Аzizovich</span>
                        </li>

                        <li className="friendship-info__item">
                            <span className='friendship-info__item--text1'>Tashkilot tashkil topgan sana</span>
                            <span className='friendship-info__item--text2'>1994 yil may</span>
                        </li>

                        <li className="friendship-info__item">
                            <span className='friendship-info__item--text1'>Rahbar saylangan sana</span>
                            <span className='friendship-info__item--text2'>1994 yil may</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StatesFriendshipInfo