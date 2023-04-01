import React from "react";

import "./videoModal.scss";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const VideoModal = ({ showModal, setShowModal, moveSlide, activeVideo }) => {
  return (
    <div className={`video-modal ${showModal ? "show-modal" : ""}`}>
      <div
        className="video-modal__left-arrow"
        onClick={() => moveSlide("left")}
      >
        <FiChevronLeft />
      </div>
      <div
        className="video-modal__close-btn"
        onClick={() => setShowModal(false)}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.614786 0.0437346C0.352286 0.14061 0.139786 0.353109 0.0429107 0.615609C0.0210357 0.681234 0.00228573 0.831235 0.00228573 0.95311C-0.000839272 1.38123 -0.203964 1.15311 3.39916 4.75623L6.63979 7.99998L3.38666 11.2562C-0.282089 14.9312 -0.0195893 14.6344 0.00541073 15.1094C0.0210357 15.3937 0.0897857 15.5562 0.264786 15.7344C0.442911 15.9094 0.605411 15.9781 0.889786 15.9937C1.36479 16.0187 1.06791 16.2812 4.74291 12.6125L7.99916 9.35936L11.2585 12.6125C14.9304 16.2812 14.6335 16.0187 15.1085 15.9937C15.3929 15.9781 15.5554 15.9094 15.7335 15.7344C15.9085 15.5562 15.9773 15.3937 15.9929 15.1094C16.0179 14.6344 16.2804 14.9312 12.6117 11.2562L9.35854 7.99998L12.6117 4.74061C16.2804 1.06873 16.0179 1.36561 15.9929 0.89061C15.9773 0.606235 15.9085 0.443734 15.7335 0.26561C15.5554 0.0906096 15.3929 0.0218592 15.1085 0.00623512C14.6335 -0.0187664 14.9304 -0.281265 11.2554 3.38748L7.99916 6.64061L4.75541 3.39998C1.15229 -0.20314 1.38041 -1.52588e-05 0.952286 0.00310898C0.833536 0.00310898 0.680411 0.0218592 0.614786 0.0437346Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="video-modal__video-modal-container">
        {activeVideo ? (
          <iframe
            className="active-video"
            src={`https://www.youtube.com/embed/${activeVideo}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : null}
      </div>
      <div
        className="video-modal__right-arrow"
        onClick={() => moveSlide("right")}
      >
        <FiChevronRight />
      </div>
    </div>
  );
};

export default VideoModal;
