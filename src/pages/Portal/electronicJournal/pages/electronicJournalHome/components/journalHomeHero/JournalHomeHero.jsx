import React from "react";
import "./journalHomeHero.scss";
import { Link } from "react-router-dom";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { useTranslation } from "react-i18next";

const JournalHomeHero = ({ allMagazine }) => {
  const { t } = useTranslation();
  const data = allMagazine?.data[0];
  const time = data?.start_data_edition
    .slice(0, 10)
    .split("-")
    .reverse()
    .join(".");

  return (
    <section className="journal-home-hero">
      <div className="journal-home-hero__container container">
        <div className="journal-home-hero__inner">
          <div className="journal-home-hero__inner-img">
            <img
              src={`${PORTAL_IMAGE_URL}${data?.thumbnail}`}
              className="journal-home-hero__img"
              alt={data?.title}
            />
          </div>

          <div className="journal-home-hero__inner-content">
            <span className="journal-home-hero__inner-content--time">
              {t("electron_journal.release")}: {time}
            </span>
            <h2 className="journal-home-hero__inner-title">{data?.title}</h2>

            <b className="journal-home-hero__inner-about">
              {t("electron_journal.about_magazine")}
            </b>
            <p className="journal-home-hero__inner-desc">
              {data?.short_content?.length > 259
                ? data?.short_content?.slice(0, 259) + "..."
                : data?.short_content}
            </p>

            <Link
              to={`/portal-category/electronic-journal/about/${data?.id}`}
              className="journal-home-hero__inner-btn"
            >
              {t("electron_journal.more_detailed")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalHomeHero;
