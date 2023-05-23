import React, { useState } from "react";

import PlayerModal from "../playerModal/PlayerModal";
import VideoGrid from "../videoGrid/VideoGrid";

import "./aboutUzbekistanVideos.scss";
import {
  aboutUzbShowMediaModal,
  aboutUzbSlideMove,
} from "../aboutUzbekistanGallery/extra";
import { MyButton } from "../../../../../component";

const AboutUzbekistanVideos = ({
  mediaData,
  countPagination,
  activePage,
  moreData,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const moveSlide = (value) => {
    aboutUzbSlideMove({
      mediaData,
      activeVideo,
      setActiveVideo,
      value,
    });
  };

  const handleClick = (videoId) => {
    const video = JSON.parse(videoId)[0].download_link;
    setActiveVideo(video);
    setShowModal(true);
    aboutUzbShowMediaModal({ mediaData, video });
  };

  return (
    <div className="about-uzbekistan_videos">
      <PlayerModal
        showModal={showModal}
        setShowModal={setShowModal}
        moveSlide={moveSlide}
        activeVideo={activeVideo}
      />

      <VideoGrid data={mediaData} handleClick={handleClick} />

      {countPagination > 1 && activePage < countPagination ? (
        <div
          className="facilities_intro_btn"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <MyButton onClick={moreData}>Ko'proq ko'rish</MyButton>
        </div>
      ) : null}
    </div>
  );
};

export default AboutUzbekistanVideos;
