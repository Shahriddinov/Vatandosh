import "./PublicAssCard.scss";
import { motion } from "framer-motion";
import { PORTAL_IMAGE_URL } from "../../../../services/api/utils";
import flagIcon from "../../../../assets/images/portal/cabinetVolunteer/flag.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PublicAssCard = ({ data, allRegions }) => {
  const navigate = useNavigate();
  const countryInfo = allRegions.find(
    (country) => country.id === data.region_id
  );
  const { t } = useTranslation();
  return (
    <>
      <div className="country-card">
        <div className="country-card_cardTop">
          <img
            src={
              countryInfo?.flag
                ? `${PORTAL_IMAGE_URL}${countryInfo?.flag}`
                : flagIcon
            }
            alt="flag"
          />
          <span>{countryInfo?.name}</span>
        </div>
        <div className="country-card_hl"></div>
        <p className="country-card_text">
          {data?.title?.length > 84
            ? data?.title.slice(0, 75) + "..."
            : data.title}
        </p>
        <img src={`${PORTAL_IMAGE_URL}${data?.logo}`} alt="channel" />
        <p className="country-card_bottomText">
          {t("choices.publishedArticles")}: {data.news}
        </p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            navigate(
              `/portal-category/community-association/country/${countryInfo?.id}/${data.id}`
            )
          }>
          {t("choices.more")}
        </motion.button>
      </div>
    </>
  );
};

export default PublicAssCard;
