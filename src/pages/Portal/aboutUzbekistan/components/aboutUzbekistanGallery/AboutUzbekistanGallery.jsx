import React from "react";

import "./aboutUzbekistanGallery.scss";

import img1 from "../../../../../assets/images/gallery/3.png";
import img2 from "../../../../../assets/images/gallery/7.png";
import img3 from "../../../../../assets/images/gallery/4.png";
import img4 from "../../../../../assets/images/gallery/5.png";
import img5 from "../../../../../assets/images/gallery/8.png";
import img6 from "../../../../../assets/images/gallery/1.png";
import img7 from "../../../../../assets/images/gallery/6.png";
import img8 from "../../../../../assets/images/gallery/2.png";

const AboutUzbekistanGallery = () => {
  const images = [
    { id: 1, img: img1, size: "small" },
    { id: 2, img: img2, size: "middle" },
    { id: 3, img: img3, size: "extra-small" },
    { id: 4, img: img4, size: "middle" },
    { id: 5, img: img5, size: "extra-small" },
    { id: 6, img: img6, size: "small" },
    { id: 7, img: img7, size: "large" },
    { id: 8, img: img8, size: "large" },
  ];

  return (
    <div className="about-uzbekistan-gallery">
      <div className="container">
        <h2 className="about-uzbekistan-title">Фотогалерея</h2>
        <div className="about-uzbekistan-gallery__images">
          {images.map((image) => (
            <img
              key={image.id}
              className={`about-uzbekistan-gallery__${image.size}`}
              src={image.img}
              alt="gallery picture"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUzbekistanGallery;
