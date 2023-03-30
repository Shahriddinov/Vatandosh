export const mediaPagination = (activeCard, mediaData) => {
  const num = activeCard === "videos" ? 6 : 16;
  return Math.ceil(mediaData?.total / num);
};

export const showVideoModal = ({ mediaData, videoId }) => {
  const leftArrow = document.querySelector(".mediateka__left-arrow");
  const rightArrow = document.querySelector(".mediateka__right-arrow");

  const data = mediaData[0].data;
  const indexVideo = data.findIndex((el) => el.video_url === videoId);

  if (indexVideo === 0) {
    leftArrow.style.opacity = 0.5;
    leftArrow.style.pointerEvents = "none";
  } else {
    leftArrow.style.opacity = 1;
    leftArrow.style.pointerEvents = "initial";
  }

  if (indexVideo === data.length - 1) {
    rightArrow.style.opacity = 0.5;
    rightArrow.style.pointerEvents = "none";
  } else {
    rightArrow.style.opacity = 1;
    rightArrow.style.pointerEvents = "initial";
  }
};

export const slideMove = ({
  mediaData,
  activeVideo,
  setActiveVideo,
  value,
}) => {
  const leftArrow = document.querySelector(".mediateka__left-arrow");
  const rightArrow = document.querySelector(".mediateka__right-arrow");

  const data = mediaData[0].data;
  let indexVideo = data.findIndex((el) => el.video_url === activeVideo);

  if (value === "left" && indexVideo > 0) {
    setActiveVideo(data[indexVideo - 1].video_url);
    indexVideo -= 1;
  } else if (value === "right" && indexVideo < data.length) {
    setActiveVideo(data[indexVideo + 1].video_url);
    indexVideo += 1;
  }

  if (indexVideo === 0) {
    leftArrow.style.opacity = 0.5;
    leftArrow.style.pointerEvents = "none";
  } else {
    leftArrow.style.opacity = 1;
    leftArrow.style.pointerEvents = "initial";
  }

  if (indexVideo === data.length - 1) {
    rightArrow.style.opacity = 0.5;
    rightArrow.style.pointerEvents = "none";
  } else {
    rightArrow.style.opacity = 1;
    rightArrow.style.pointerEvents = "initial";
  }
};
