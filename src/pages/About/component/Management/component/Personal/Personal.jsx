import React, {useEffect} from 'react';
import "./Personal.scss"
import {useSelector} from "react-redux";
import {baseServerUrl} from "../../../../../../services/api/utils";
import phone from "../../../../../../assets/images/about/Phone.svg";
import mail from "../../../../../../assets/images/about/mail.svg";
import {getContact} from "../../../../../../reduxToolkit/contactSlice/extraReducer";

function Personal({management}) {
    const lan = useSelector((state) => state.language.language);

    // const contactData = useSelector((state) => state.contactSlice.contactData);
    //
    // useEffect(() => {
    //     dispatch(getContact());
    // }, []);


    return (
        <div className="personal">
            <div className="personal__img-box">
                <img
                    className="personal__img"
                    src={`${baseServerUrl}/${management?.img}`}
                    alt={management[`position_${lan}`]}
                />
            </div>

            <div className="personal__body">
                <h3 className="personal__title">
          <span className="personal__title--span">
            {management[`position_${lan}`]}
          </span>
                    <span>{management[`name_${lan}`]}</span>
                </h3>

                <ul className="personal__list">
                    <li className="personal__item">


                        <a href={`tel: ${management?.phone}`} className="personal__item_flexss">
                            <span className="personal__item--icon">

                            <img src={phone} alt=""/>
                            </span>
                            <span>{management?.phone}</span>
                        </a>

                    </li>

                    <li className="personal__item">
                        <a href={`tel: ${management?.mail}`} className="personal__item_flexss">
                            <span className="personal__item--icon">
                                                            <img src={mail} alt="email"/>

                            </span>
                            <span>{management?.email}</span>
                        </a>


                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Personal;