import { useTranslation } from "react-i18next";
import {
  ArrowIcon,
  ExcludeIcon,
} from "../../../../../../../assets/images/expert";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import "./VolunterCouncil.scss";
import { Link } from "react-router-dom";
import { volunteersSort } from "../../extra";

function Volunter({ volunteers }) {
  const { t } = useTranslation();
  const data = volunteers.length > 0 ? volunteersSort(volunteers) : [];

  return (
    <div className="expert">
      <div className="container">
        <h2>{t("voluntery.voluntery")}</h2>
        <div className="volunter-list">
          {data?.map((volunteer) => {
            return (
              <div key={volunteer.id} className="expert-list-item">
                <div className="expert-list-item-desc">
                  <img
                    className="expert-list-item-img"
                    src={`${PORTAL_IMAGE_URL}${
                      volunteer?.user_profile?.avatar_url
                        ? volunteer?.user_profile?.avatar_url
                        : volunteer?.user?.avatar
                    }`}
                    alt={volunteer?.user_profile?.second_name}
                  />
                  <p>
                    {volunteer?.user_profile?.international_address_id?.name}
                    {", "}
                    {volunteer?.user_profile?.international_location_id?.name}
                  </p>
                  <h3 style={{ color: "#065EA9" }}>
                    {volunteer?.user_profile?.first_name +
                      " " +
                      volunteer?.user_profile?.last_name}
                  </h3>
                  <p style={{ color: "#656B70", fontWeight: 700 }}>
                    {t("voluntery.card_articles")}:{" "}
                    <b style={{ color: "#065EA9" }}>
                      {volunteer?.user_volunteer_activities}
                    </b>
                  </p>
                </div>
                <div className="link-div">
                  <Link
                    className="employe-link"
                    to={`profile/${volunteer?.id}`}
                  >
                    <span>{t("expert.detail")}</span>
                    <img src={ArrowIcon} alt="Arrow Icon" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="expert-item">
          <Link to="volunter-employe" className="expert-link">
            <img src={ExcludeIcon} alt="error" />
            {t("voluntery.allVolunteers")}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Volunter;
