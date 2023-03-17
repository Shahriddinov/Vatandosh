import React from 'react'
import "./councilCard.scss"
import phone from "../../../../assets/images/about/Phone.svg"
import mail from "../../../../assets/images/about/mail.svg"
import { useSelector } from 'react-redux'

const CouncilCard = ({trustee}) => {
    const lan = useSelector((state) => state.language.language);

    console.log(trustee);
  return (
    <div className='council-card'>
        <div className="council-card__img-box">
            <img className="council-card__img" src={`https://vatanparvarbackend.napaautomotive.uz/storage/${trustee?.img}`} alt={trustee[`position_${lan}`]}  />
        </div>

        <div className="council-card__body">
            <h3 className="council-card__title">
                <span className="council-card__title--span">{trustee[`position_${lan}`]}</span>
                <span>{trustee[`name_${lan}`]}</span>
            </h3>

            <ul className="council-card__list">
                <li className="council-card__item">
                    <span className="council-card__item--icon">
                        <img src={phone} alt="" />
                    </span>
                    <span>{trustee?.phone}</span>
                </li>

                <li className="council-card__item">
                    <span className="council-card__item--icon">
                        <img src={mail} alt="email" />
                    </span>
                    <span>{trustee?.email}</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CouncilCard