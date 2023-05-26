import React from "react";

import "./journalAboutContent.scss";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
const JournalAboutContent = ({ oneMagazine }) => {
  const time = oneMagazine?.start_data_edition
    .slice(0, 10)
    .split("-")
    .reverse()
    .join(".");
  const images = JSON.parse(oneMagazine?.images);
  return (
    <section className="journal-about-content">
      <div className="journal-about-content__container container">
        <div className="journal-about-content__inner">
          <h4 className="journal-about-content__inner_title">
            {oneMagazine?.title}
          </h4>
          <b className="journal-about-content__inner_date">Выпуск: {time}</b>

          <div className="journal-about-content__inner_content">
            <p className="journal-about-content__inner-text">
              {oneMagazine?.short_content}
            </p>

            <div className="journal-about-content__content-images">
              {images.slice(0, 2).map((el, index) => (
                <img
                  key={index}
                  src={`${PORTAL_IMAGE_URL}${el}`}
                  alt="img"
                  className="journal-about-content__content-image"
                />
              ))}
            </div>

            <p className="journal-about-content__inner-text">
              {oneMagazine?.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalAboutContent;
