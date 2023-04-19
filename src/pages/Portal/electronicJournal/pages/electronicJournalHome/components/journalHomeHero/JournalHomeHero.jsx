import React from "react";
import "./journalHomeHero.scss";
import { Link } from "react-router-dom";
import { HeroImg } from "../../../../../../../assets/images/electronic-journal";

const JournalHomeHero = () => {
  return (
    <section className="journal-home-hero">
      <div className="journal-home-hero__container container">
        <div className="journal-home-hero__inner">
          <div className="journal-home-hero__inner-img">
            <img
              src={HeroImg}
              className="journal-home-hero__img"
              alt="inner img"
            />
          </div>

          <div className="journal-home-hero__inner-content">
            <span className="journal-home-hero__inner-content--time">
              Выпуск: 01.02.2022
            </span>
            <h2 className="journal-home-hero__inner-title">
              Vatandosh jurnalining yanvar oyidagi soni
            </h2>

            <b className="journal-home-hero__inner-about">О журнале</b>
            <p className="journal-home-hero__inner-desc">
              Based on an original new story by J.K. Rowling, Jack Thorne and
              John Tiffany, a new play by Jack Thorne, Harry Potter and the
              Cursed Child is the eighth story in the Harry Potter series and
              the first official Harry Potter story to be presented on stage.
            </p>

            <Link
              to="/portal-category/electronic-journal/about"
              className="journal-home-hero__inner-btn"
            >
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalHomeHero;
