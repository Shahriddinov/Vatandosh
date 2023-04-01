import React from "react";

import { baseServerUrl } from "../../../../services/api/utils";

import "./imageList.scss";

const ImagesList = ({ activeCard, dataImage, handleImageModal }) => {
  return activeCard === "images" ? (
    <div className={`images ${activeCard === "images" ? "active-card" : ""}`}>
      {dataImage.map((image) => (
        <div
          key={image.id}
          className="images__image-card"
          onClick={() => handleImageModal(image.image)}
        >
          <div className="images__image-container">
            <img src={`${baseServerUrl}/${image.image}`} alt="mediatake" />
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default ImagesList;
