import { useTranslation } from "react-i18next";
import { UserIcon, Globe } from "../../../../../../../assets/images/expert";

function CouncilStatics({ count, VolunteerCount }) {
  const { t } = useTranslation();
  return (
    <div className="council-right">
      <div>
        <span className="council--span">
          <h5>{t("expert.registered")}</h5>
          <img src={UserIcon} />
        </span>
        <h4>{count.total}</h4>
        <p>{t("voluntery.voluntery")}</p>
      </div>
      <div className="council-bottom">
        <span className="council--span">
          <h5>{t("expert.country")}</h5>
          <img src={Globe} />
        </span>
        {VolunteerCount?.sort((a, b) => b.users.length - a.users.length)
          .slice(0, 5)
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
