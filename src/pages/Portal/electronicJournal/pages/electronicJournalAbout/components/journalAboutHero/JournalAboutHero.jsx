import React from "react";

import "./journalAboutHero.scss";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

const JournalAboutHero = ({ pageMenu }) => {
  return (
    <section className="journal-about-hero">
      <div className="journal-about-hero__container container">
        <div className="journal-about-hero__inner">
          <div className="journal-about-hero__inner_content">
            <h2 className="journal-about-hero__title">{pageMenu?.name}</h2>
            <p className="journal-about-hero__desc">{pageMenu?.text}</p>
          </div>

          <div className="journal-about-hero__inner_img">
            <img
              className="journal-about-hero__img"
              src={`${PORTAL_IMAGE_URL}${pageMenu?.background_image}`}
              alt={pageMenu?.name}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalAboutHero;
