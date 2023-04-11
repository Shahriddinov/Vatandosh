import "./VictorinaStatics.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import VictorinaStatics from "./VictorinaStatics";

function VictorinaCouncil({ councilData }) {
  const { t } = useTranslation();
  return (
    <div className="council">
      <div className="container">
        <div className="council-left">
          <img src={councilData?.image} alt="img" />
          <h3>{councilData?.title}</h3>
          <p>{councilData?.desc}</p>
          <div>
            <Link to={councilData.pathUrl}>{t("expert.detail")}</Link>
          </div>
        </div>
        <VictorinaStatics />
      </div>
    </div>
  );
}
export default VictorinaCouncil;
