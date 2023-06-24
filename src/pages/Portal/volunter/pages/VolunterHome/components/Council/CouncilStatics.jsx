import { useTranslation } from "react-i18next";
import { UserIcon, Globe } from "../../../../../../../assets/images/expert";
import { useLocation } from "react-router-dom";

function CouncilStatics({ count, VolunteerCount }) {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const pathMatch = pathname.split("/")[2];
  return (
    <div className="council-right">
      <div>
        <span className="council--span">
          <h5>{t("expert.registered")}</h5>
          <img src={UserIcon} alt="error" />
        </span>
        <h4>{count?.total}</h4>

        <p>
          {pathMatch === "expert"
            ? t("expert.allexperts")
            : t("voluntery.voluntery")}
        </p>
      </div>
      <div className="council-bottom">
        <span className="council--span">
          <h5>{t("expert.country")}</h5>
          <img src={Globe} alt="error" />
        </span>
        {VolunteerCount?.sort((a, b) => b.users.length - a.users.length)
          .slice(0, 6)
          .map((data, index) => (
            <span className="council-span" key={index}>
              <h5>{data.name}</h5>
              <p>{data.users.length}</p>
            </span>
          ))}
      </div>
    </div>
  );
}

export default CouncilStatics;
