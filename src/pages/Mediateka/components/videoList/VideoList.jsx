import React from "react";

import "./videoList.scss";

const VideoList = ({ activeCard, data, categoryId, handleClick, lan }) => {
  return (
    <div
      className={`mediateka__videos ${
        activeCard === "videos" ? "active-card" : ""
      }`}
    >
      {data.map((video) => {
        return categoryId === 0 ? (
          <div key={video.id} className="mediateka__video-card">
            <div className="mediateka__video-container">
              <div
                onClick={() => handleClick(video.video_url)}
                className="mediateka__play-video"
              ></div>
              <iframe
                src={`https://www.youtube.com/embed/${video.video_url}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mediateka__video-name">
              <p
                dangerouslySetInnerHTML={{
                  __html: video[`title_${lan}`],
                }}
              />
            </div>
          </div>
        ) : categoryId === parseInt(video.menu_uz) ? (
          <div key={video.id} className="mediateka__video-card">
            <div className="mediateka__video-container">
              <div
                onClick={() => handleClick(video.video_url)}
                className="mediateka__play-video"
              ></div>
              <iframe
                src={`https://www.youtube.com/embed/${video.video_url}?showinfo=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mediateka__video-name">
              <p
                dangerouslySetInnerHTML={{
                  __html: video[`title_${lan}`],
                }}
              />
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default VideoList;
