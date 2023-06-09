import React from "react";

import "./videoList.scss";

const VideoList = ({ activeCard, data, handleClick, lan }) => {
  return (
    <div className={`videos ${activeCard === "videos" ? "active-card" : ""}`}>
      {data.map((video) => (
        <div key={video.id} className="videos__video-card">
          <div className="videos__video-container">
            <div
              onClick={() => handleClick(video.video_url)}
              className="videos__play-video"
            ></div>
            <iframe
              src={`https://www.youtube.com/embed/${video.video_url}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="videos__video-name">
            <p
              dangerouslySetInnerHTML={{
                __html: video[`title_${lan}`],
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
