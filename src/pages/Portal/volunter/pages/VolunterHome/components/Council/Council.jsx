import "./Council.scss";
import { Link } from "react-router-dom";
import CouncilStatics from "./CouncilStatics";
import { useTranslation } from "react-i18next";

function Council({ councilData, VolunteerCount, volunteers }) {
  const { t } = useTranslation();

  return (
    <div className="council">
      <div className="container">
        <div className="council-left">
          <img src={councilData?.image} alt="img" />
          <h3>{councilData?.title}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: councilData?.desc,
            }}
          />
          <div>
            <Link to={councilData.pathUrl}>{t("expert.more")}</Link>
          </div>
        </div>
        <CouncilStatics count={volunteers} VolunteerCount={VolunteerCount} />
      </div>
    </div>
  );
}
export default Council;
