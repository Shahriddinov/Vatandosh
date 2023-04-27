import React from 'react'
import './videoCard.scss'

import Play from '../../../../../assets/images/tourist-facilities/playbutton.svg'

const VideoCard = (props) => {

    return (
        <>
            <div className="video_card">
                <div className="video_card_cover">
                    <img src={Play} alt="" className="video_card_cover_play" />
                    <img src={props.image} alt="" className="video_card_cover_image"/>
                </div>
                <p className='video_card_text'>{props.text}</p>
            </div>
        </>
    )
}

export default VideoCard