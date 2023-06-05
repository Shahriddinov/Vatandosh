import React from "react";

import "./archiveCard.scss";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
const ArchiveCard = (props) => {
  const { t } = props;
  const time = props?.start_data_edition
    .slice(0, 10)
    .split("-")
    .reverse()
    .join(".");

  const pdf = JSON.parse(props?.pdf)[0];
  return (
    <li className="archive-intro__item">
      <div className="archive-card">
        <div className="archive-card__img">
          <img
            className="img"
            src={`${PORTAL_IMAGE_URL}${props?.thumbnail}`}
            alt={props?.title}
          />
        </div>

        <div className="archive-card__body">
          <b className="archive-card__date">{time}</b>
          <h4 className="archive-card__title">{props?.title}</h4>
          <b className="archive-card__sub_title">
            {t("electron_journal.about_magazine")}
          </b>
          <p className="archive-card__desc">
            {props?.short_content?.length > 254
              ? props?.short_content?.slice(0, 254) + "..."
              : props?.short_content}
          </p>

          <a
            href={`${PORTAL_IMAGE_URL}${pdf?.download_link}`}
            target="blank"
            className="archive-card__btn"
          >
            {t("electron_journal.more_detailed")}
          </a>
        </div>
      </div>
    </li>
  );
};

export default ArchiveCard;
