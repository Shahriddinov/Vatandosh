import { CouncilImage } from "../../../../../../../assets/images/volunter";
import "./Council.scss";
import { Link } from "react-router-dom";
import CouncilStatics from "./CouncilStatics";
import { useTranslation } from "react-i18next";

function Council({ councilData }) {
  const { t } = useTranslation();
  return (
    <div className="council">
      <div className="container">
        <div className="council-left">
          <img src={councilData?.image} alt="img" />
          <h3>{councilData?.title}</h3>
          <p>{councilData?.desc}</p>
          <div>
            <Link to={councilData.pathUrl}>{t("expert.more")}</Link>
          </div>
        </div>
        <CouncilStatics count={councilData.count} />
      </div>
    </div>
  );
}
export default Council;
