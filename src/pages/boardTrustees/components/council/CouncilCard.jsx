import React from 'react'
import "./councilCard.scss"
import phone from "../../../../assets/images/about/Phone.svg"
import mail from "../../../../assets/images/about/mail.svg"

const CouncilCard = ({name,img,job}) => {
  return (
    <div className='council-card'>
        <div className="council-card__img-box">
            <img className="council-card__img" src={img} alt=""  />
        </div>

        <div className="council-card__body">
            <h3 className="council-card__title">
                <span className="council-card__title--span">{job}</span>
                <span>{name}</span>
            </h3>

            <ul className="council-card__list">
                <li className="council-card__item">
                    <span className="council-card__item--icon">
                        <img src={phone} alt="" />
                    </span>
                    <span>+998(55) 502-22-99</span>
                </li>

                <li className="council-card__item">
                    <span className="council-card__item--icon">
                        <img src={mail} alt="" />
                    </span>
                    <span>sattarov@vatandoshlarfondi.uz</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CouncilCard