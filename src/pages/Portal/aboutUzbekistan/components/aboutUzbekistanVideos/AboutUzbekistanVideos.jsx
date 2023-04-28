import React, { useState } from 'react'
import { showMediaModal, slideMove } from '../../../../Mediateka/extraFunc';
import PlayerModal from '../playerModal/PlayerModal';
import VideoGrid from '../videoGrid/VideoGrid';

const AboutUzbekistanVideos = ({mediaData, lan}) => {

    const [showModal, setShowModal] = useState(false);
    const [activeVideo, setActiveVideo] = useState("");
    const [activeCard, setActiveCard] = useState("videos");
    const [categoryId, setCategoryId] = useState(0);

    const moveSlide = (value) => {
        slideMove({
            mediaData,
            activeVideo,
            setActiveVideo,
            value,
        });
    };

    const handleClick = (videoId) => {
        setActiveVideo(videoId);
        setShowModal(true);
        showMediaModal({ mediaData, videoId });
    };


    return (
        <>
            <PlayerModal
                showModal={showModal}
                setShowModal={setShowModal}
                moveSlide={moveSlide}
                activeVideo={activeVideo}
            />
            <VideoGrid
                activeCard={activeCard}
                categoryId={categoryId}
                data={mediaData[0].data}
                handleClick={handleClick}
                lan={lan}
            />
        </>
    )
}

export default AboutUzbekistanVideos