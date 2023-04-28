import React from 'react'
import './facilitiesCard.scss'
import { Link } from 'react-router-dom'

const FacilitiesCard = (props) => {

    return (
        <>
            <div className="facility_card">
                <div className="facility_card_cover">
                    <img src={props.image} alt="" />
                </div>
                <Link to={"/portal-category/about-uzbekistan/city"}>
                    <p className='facility_card_text'>{props.text}</p>
                </Link>
            </div>
        </>
    )
}

export default FacilitiesCard