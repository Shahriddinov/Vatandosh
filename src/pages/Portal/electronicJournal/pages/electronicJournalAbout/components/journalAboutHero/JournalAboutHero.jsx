import React from "react";
import { JournalAboutHeroImg } from "../../../../../../../assets/images/electronic-journal";

import "./journalAboutHero.scss";

const JournalAboutHero = ({ title, desc }) => {
  return (
    <section className="journal-about-hero">
      <div className="journal-about-hero__container container">
        <div className="journal-about-hero__inner">
          <div className="journal-about-hero__inner_content">
            <h2 className="journal-about-hero__title">{title}</h2>
            <p className="journal-about-hero__desc">{desc}</p>
          </div>

          <div className="journal-about-hero__inner_img">
            <img
              className="journal-about-hero__img"
              src={JournalAboutHeroImg}
              alt="Hero img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalAboutHero;
