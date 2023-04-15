import { useTranslation } from "react-i18next";
import {
  ArrowIcon,
  ExcludeIcon,
} from "../../../../../../../assets/images/expert";
import { data } from "../../data";
import "./ExpertCouncil.scss";
import { Link } from "react-router-dom";

function Expert() {
  const { t } = useTranslation();
  return (
    <div className="expert">
      <div className="container">
        <h2>{t("expert.expertCouncil")}</h2>
        <div className="expert-list">
          {data.map((evt) => (
            <div key={evt.id}>
              <img src={evt.images} alt="error" />
              <p>{evt.country}</p>
              <h3>{evt.name}</h3>
              <h4>{evt.job}</h4>
              <h4>{evt.location}</h4>
              <Link
                className="employe-link"
                to="/portal-category/expert/profile"
              >
                <span>{t("expert.detail")}</span>
                <img src={ArrowIcon} alt="Arrow Icon" />
              </Link>
            </div>
          ))}
        </div>
        <div className="expert-item">
          <Link
            to="/portal-category/expert/expert-council"
            className="expert-link"
          >
            <img src={ExcludeIcon} alt="error" />
            {t("expert.allexperts")}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Expert;
