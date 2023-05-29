import "./VictorinaStatics.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import VictorinaStatics from "./VictorinaStatics";
import { imageUrl } from "../../../../../../../services/api/utils";

function VictorinaCouncil({ pageData }) {
  const { t } = useTranslation();
  return (
    <div className="council">
      <div className="container">
        <div className="council-left">
          <img
            className="victorina-images"
            src={`${imageUrl}/${pageData?.image}`}
            alt="img"
          />
          <h3>{pageData?.title}</h3>
          <p>{pageData?.excerpt}</p>
          <div>
            <Link to="/portal-category/victorina/about">
              {t("expert.detail")}
            </Link>
          </div>
        </div>
        <VictorinaStatics pageData={pageData} />
      </div>
    </div>
  );
}
export default VictorinaCouncil;
