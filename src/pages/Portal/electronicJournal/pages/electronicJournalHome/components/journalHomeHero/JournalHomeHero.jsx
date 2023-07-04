import React from "react";
import Button from "@mui/material/Button";
import "./journalHomeHero.scss";
import { Link } from "react-router-dom";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { useTranslation } from "react-i18next";
import AddArticleModal from "../addArticleModal/AddArticleModal";

const JournalHomeHero = ({ allMagazine }) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = allMagazine?.data[0];
  const time = data?.start_data_edition
    .slice(0, 10)
    .split("-")
    .reverse()
    .join(".");

  return (
    <>
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

              <div className="journal-home-hero__inner-btns">
                <Link
                  to={`/portal-category/electronic-journal/about/${data?.id}`}
                  className="journal-home-hero__inner-btn"
                >
                  {t("electron_journal.more_detailed")}
                </Link>
                <button
                  className="journal-home-hero__inner-btn"
                  onClick={handleOpen}
                >
                  Maqola yuborish
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AddArticleModal open={open} handleClose={handleClose} />
    </>
  );
};

export default JournalHomeHero;
