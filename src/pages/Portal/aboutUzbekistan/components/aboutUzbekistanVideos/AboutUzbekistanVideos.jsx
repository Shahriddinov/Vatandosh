import React, { useState } from "react";

import { showMediaModal, slideMove } from "../../../../Mediateka/extraFunc";
import PlayerModal from "../playerModal/PlayerModal";
import VideoGrid from "../videoGrid/VideoGrid";

import "./aboutUzbekistanVideos.scss";
import {
  aboutUzbShowMediaModal,
  aboutUzbSlideMove,
} from "../aboutUzbekistanGallery/extra";

const AboutUzbekistanVideos = ({ mediaData, lan, hasMoreBtn }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");
  const [activeCard, setActiveCard] = useState("videos");
  const [categoryId, setCategoryId] = useState(0);

  const moveSlide = (value) => {
    aboutUzbSlideMove({
      mediaData,
      activeVideo,
      setActiveVideo,
      value,
    });
  };

  const handleClick = (videoId) => {
    setActiveVideo(videoId);
    setShowModal(true);
    aboutUzbShowMediaModal({ mediaData, videoId });
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
        data={mediaData}
        handleClick={handleClick}
        lan={lan}
      />

      {hasMoreBtn ? (
        <div className="about-uzbekistan-more-btn">
          <button>Ko‘proq ko‘rish</button>
        </div>
      ) : null}
    </>
  );
};

export default AboutUzbekistanVideos;
