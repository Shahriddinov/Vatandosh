import React, { useState } from "react";

import { showMediaModal } from "../../../../Mediateka/extraFunc";
import ImageModal from "../../../../Mediateka/components/imageModal/ImageModal";

import "./aboutUzbekistanGallery.scss";
import { aboutUzbShowMediaModal, aboutUzbSlideMove } from "./extra";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";

const images = [
  { id: 1, size: "small" },
  { id: 2, size: "middle" },
  { id: 3, size: "extra-small" },
  { id: 4, size: "middle" },
  { id: 5, size: "extra-small" },
  { id: 6, size: "small" },
  { id: 7, size: "large" },
  { id: 8, size: "large" },
];
const AboutUzbekistanGallery = ({ allGallery }) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  const imageData = allGallery
    .slice(0, 8)
    .map((el, index) => ({ ...el, size: images[index].size }));

  const moveSlide = (value) => {
    aboutUzbSlideMove({
      mediaData: imageData,
      setActiveImage,
      activeImage,
      value,
    });
  };

  const handleImageModal = ({ id, img }) => {
    setShowImageModal(true);
    setActiveImage(img);
    aboutUzbShowMediaModal({ mediaData: images, imgUrl: img, id: id });
  };

  return (
    <div className="about-uzbekistan-gallery">
      <h2 className="about-uzbekistan-title">Фотогалерея</h2>
      <div className="about-uzbekistan-gallery__images">
        {imageData.map((image) => (
          <img
            onClick={() => handleImageModal({ id: image.id, img: image.image })}
            key={image.id}
            className={`about-uzbekistan-gallery__${image.size}`}
            src={`${PORTAL_IMAGE_URL}${image?.image}`}
            alt={image?.title}
          />
        ))}
      </div>
      <ImageModal
        activeImage={activeImage}
        setShowImageModal={setShowImageModal}
        showImageModal={showImageModal}
        moveSlide={moveSlide}
      />
    </div>
  );
};

export default AboutUzbekistanGallery;
