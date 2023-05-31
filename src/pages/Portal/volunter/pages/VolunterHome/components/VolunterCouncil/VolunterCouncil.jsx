import { useTranslation } from "react-i18next";
import {
  ArrowIcon,
  ExcludeIcon,
} from "../../../../../../../assets/images/expert";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import "./VolunterCouncil.scss";
import { Link } from "react-router-dom";

function Volunter({ volunteers }) {
  const { t } = useTranslation();
  console.log(volunteers);
  return (
    <div className="expert">
      <div className="container">
        <h2>{t("voluntery.voluntery")}</h2>
        <div className="volunter-list">
          {volunteers?.map((volunteer) => (
            <div key={volunteer.id}>
              <img
                style={{
                  width: "270px",
                  height: "270px",
                }}
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
                {volunteer?.user_profile?.second_name}
              </h3>
              <p style={{ color: "#656B70", fontWeight: 700 }}>
                Chop etilgan maqolalar soni:{" "}
                <b style={{ color: "#065EA9" }}>
                  {volunteer?.user_volunteer_activities?.length}
                </b>
              </p>
              <Link className="employe-link" to={`profile/${volunteer.id}`}>
                <span>{t("expert.detail")}</span>
                <img src={ArrowIcon} alt="Arrow Icon" />
              </Link>
            </div>
          ))}
        </div>
        <div className="expert-item">
          <Link to="volunter-employe" className="expert-link">
            <img src={ExcludeIcon} alt="error" />
            {t("expert.allexperts")}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Volunter;
