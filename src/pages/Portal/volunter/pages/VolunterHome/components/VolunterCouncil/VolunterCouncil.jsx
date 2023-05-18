import { useTranslation } from "react-i18next";
import {
  ArrowIcon,
  ExcludeIcon,
} from "../../../../../../../assets/images/expert";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";
import "./VolunterCouncil.scss";
import { Link } from "react-router-dom";


function Volunter({ volunteers }) {
  const {t}= useTranslation()
  return (
    <div className="expert">
      <div className="container">
        <h2>{t("voluntery.voluntery")}</h2>
        <div className="volunter-list">
          {volunteers.map((volunteer) => (
            <div key={volunteer.id}>
              <img
                src={`${PORTAL_IMAGE_URL}${volunteer?.user_profile_id?.user_id.avatar}`}
                alt="error"
              />
              <p>{volunteer?.user_profile_id?.international_location_id.name}</p>
              <h3>{volunteer.user_id.name}</h3>
              <h4>{volunteer?.user_employment_info_id?.specialization}</h4>
              <h4>{volunteer?.user_employment_info_id?.city}</h4>
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
