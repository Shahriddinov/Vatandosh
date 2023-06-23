import React from "react";

import "./videoGrid.scss";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";

const VideoGrid = ({ data, handleClick }) => {
  return (
    <div className={`videos`}>
      {data.map((video) => (
        <div key={video.id} className="videos__video-card">
          <div className="videos__video-container">
            <div
              onClick={() => handleClick(video.video)}
              className="videos__play-video"
            ></div>
            <img src={`${PORTAL_IMAGE_URL}${video.content}`} alt="img" />
          </div>
          <div className="videos__video-name">
            <p>{video.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
