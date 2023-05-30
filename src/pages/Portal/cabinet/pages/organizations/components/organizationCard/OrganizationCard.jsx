import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import flagIcon from "../../../../../../../assets/images/portal/cabinetVolunteer/flag.png";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

import "./organizationCard.scss";

const OrganizationCard = ({ el, allRegions }) => {
  const countryInfo = allRegions.find((country) => country.id === el.region_id);
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <li className="organization-card">
      <div className="organization-card_cardTop">
        <img
          src={
            countryInfo?.image
              ? `${PORTAL_IMAGE_URL}${countryInfo?.image}`
              : flagIcon
          }
          alt="flag"
        />
        <span>{countryInfo?.name}</span>
      </div>
      <div className="organization-card_hl"></div>
      <p className="organization-card_text">
        {el?.title?.length > 84 ? el?.title.slice(0, 75) + "..." : el.title}
      </p>
      <img src={`${PORTAL_IMAGE_URL}${el?.logo}`} alt="channel" />
      <p className="organization-card_bottomText">
        Chop etilgan maqolalar: {el.news}
      </p>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() =>
          navigate(
            `/portal-category/community-association/country/${countryInfo?.id}/${el.id}`
          )
        }
      >
        {t("communityAssociation.detail")}
      </motion.button>
    </li>
  );
};

export default OrganizationCard;
