import React from 'react';
import "./Personal.scss"
import {useSelector} from "react-redux";
import {baseServerUrl} from "../../../../../../services/api/utils";
import phone from "../../../../../../assets/images/about/Phone.svg";
import mail from "../../../../../../assets/images/about/mail.svg";
function Personal({ trustee }) {
    const lan = useSelector((state) => state.language.language);



    return (
        <div className="personal">
            <div className="personal__img-box">
                <img
                    className="personal__img"
                    src={`${baseServerUrl}/${trustee?.img}`}
                    alt={trustee[`position_${lan}`]}
                />
            </div>

            <div className="personal__body">
                <h3 className="personal__title">
          <span className="personal__title--span">
            {trustee[`position_${lan}`]}
          </span>
                    <span>{trustee[`name_${lan}`]}</span>
                </h3>

                <ul className="personal__list">
                    <li className="personal__item">
            <span className="personal__item--icon">
              <img src={phone} alt="" />
            </span>
                        <span>{trustee?.phone}</span>
                    </li>

                    <li className="personal__item">
            <span className="personal__item--icon">
              <img src={mail} alt="email" />
            </span>
                        <span>{trustee?.email}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Personal;