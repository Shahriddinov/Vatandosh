import React from 'react'
import './facilitiesCard.scss'

const FacilitiesCard = (props) => {

    return (
        <>
            <div className="facility_card">
                <div className="facility_card_cover">
                    <img src={props.image} alt="" />
                </div>
                <p className='facility_card_text'>{props.text}</p>
            </div>
        </>
    )
}

export default FacilitiesCard