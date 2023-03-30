import React from "react";

import { baseServerUrl } from "../../../../services/api/utils";

import "./imageList.scss";

const ImagesList = ({
  activeCard,
  categoryId,
  dataImage,
  handleImageModal,
}) => {
  return (
    <div
      className={`mediateka__images ${
        activeCard === "images" ? "active-card" : ""
      }`}
    >
      {dataImage.map((image) => {
        return categoryId === 0 ? (
          <div
            key={image.id}
            className="mediateka__image-card"
            onClick={() => handleImageModal(image.image)}
          >
            <div className="mediateka__image-container">
              <img src={`${baseServerUrl}/${image.image}`} alt="mediatake" />
            </div>
          </div>
        ) : categoryId === parseInt(image.menu_uz) ? (
          <div
            key={image.id}
            className="mediateka__image-card"
            onClick={() => handleImageModal(image.image)}
          >
            <div className="mediateka__image-container">
              <img src={`${baseServerUrl}/${image.image}`} alt="mediatake" />
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default ImagesList;
