import React from "react";

import "./journalCard.scss";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import { useTranslation } from "react-i18next";

const JournalCard = (props) => {
  const { t } = useTranslation();
  const time = props?.start_data_edition
    .slice(0, 10)
    .split("-")
    .reverse()
    .join(".");

  return (
    <div className="journal-card">
      <div className="journal-card__img">
        <img
          src={`${PORTAL_IMAGE_URL}${props?.thumbnail}`}
          alt={props?.title}
          className="img"
        />
      </div>
      <div className="journal-card__body">
        <p className="journal-card__date">
          {t("electron_journal.release")}: {time}
        </p>

        <h4 className="journal-card__title">
          {props?.title.length > 42
            ? props?.title?.slice(0, 42) + "..."
            : props?.title}
        </h4>
      </div>
    </div>
  );
};

export default JournalCard;
