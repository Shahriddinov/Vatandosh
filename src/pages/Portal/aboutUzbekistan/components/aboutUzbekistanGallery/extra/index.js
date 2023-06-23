export const aboutUzbShowMediaModal = ({ mediaData, videoId, imgUrl }) => {
  const data = mediaData;
  let leftArrow;
  let rightArrow;
  let indexMedia;
  let activeMedia;

  if (videoId) {
    leftArrow = document.querySelector(".video-modal__left-arrow");
    rightArrow = document.querySelector(".video-modal__right-arrow");
  } else if (imgUrl) {
    leftArrow = document.querySelector(".image-modal__left-arrow");
    rightArrow = document.querySelector(".image-modal__right-arrow");
  }

  if (videoId) {
    indexMedia = data.findIndex(
      (video) => JSON.parse(video.video)[0].download_link === videoId
    );
    activeMedia = videoId;
  } else if (imgUrl) {
    indexMedia = data.findIndex((image) => image.image === imgUrl);
    activeMedia = imgUrl;
  }

  if (indexMedia === 0) {
    leftArrow.style.opacity = 0.5;
    leftArrow.style.pointerEvents = "none";
  } else {
    leftArrow.style.opacity = 1;
    leftArrow.style.pointerEvents = "initial";
  }

  if (indexMedia === data.length - 1) {
    rightArrow.style.opacity = 0.5;
    rightArrow.style.pointerEvents = "none";
  } else {
    rightArrow.style.opacity = 1;
    rightArrow.style.pointerEvents = "initial";
  }
};

export const aboutUzbSlideMove = ({
  mediaData,
  activeVideo,
  setActiveVideo,
  setActiveImage,
  activeImage,
  value,
}) => {
  let leftArrow;
  let rightArrow;
  let indexMedia;
  let activeMedia;

  if (activeVideo) {
    leftArrow = document.querySelector(".video-modal__left-arrow");
    rightArrow = document.querySelector(".video-modal__right-arrow");
  } else if (activeImage) {
    leftArrow = document.querySelector(".image-modal__left-arrow");
    rightArrow = document.querySelector(".image-modal__right-arrow");
  }

  const data = mediaData;

  if (activeVideo) {
    indexMedia = data.findIndex(
      (video) => JSON.parse(video.video)[0].download_link === activeVideo
    );
    activeMedia = activeVideo;
  } else if (activeImage) {
    indexMedia = data.findIndex((image) => image.image === activeImage);
    activeMedia = activeImage;
  }

  if (value === "left" && indexMedia > 0) {
    if (activeVideo) {
      setActiveVideo(JSON.parse(data[indexMedia - 1].video)[0].download_link);
    } else {
      setActiveImage(data[indexMedia - 1].image);
    }
    indexMedia -= 1;
  } else if (value === "right" && data.length > indexMedia) {
    if (activeVideo) {
      setActiveVideo(JSON.parse(data[indexMedia + 1].video)[0].download_link);
    } else {
      setActiveImage(data[indexMedia + 1].image);
    }

    indexMedia += 1;
  }

  if (indexMedia === 0) {
    leftArrow.style.opacity = 0.5;
    leftArrow.style.pointerEvents = "none";
  } else {
    leftArrow.style.opacity = 1;
    leftArrow.style.pointerEvents = "initial";
  }

  if (indexMedia === data.length - 1) {
    rightArrow.style.opacity = 0.5;
    rightArrow.style.pointerEvents = "none";
  } else {
    rightArrow.style.opacity = 1;
    rightArrow.style.pointerEvents = "initial";
  }
};
