import { useTranslation } from "react-i18next";
import { UserIcon, Globe } from "../../../../../../../assets/images/expert";

function CommunityEventCouncilStatics({ allCommunityGet, allRegion }) {
  const { t } = useTranslation();

  const data = allRegion
    .filter((el) => el.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return (
    <div className="council-right">
      <div>
        <span className="council--span">
          <h5>{t("expert.registered")}</h5>
          <img src={UserIcon} alt="error" />
        </span>
        <h4>{allCommunityGet?.total}</h4>
        <p>{t("communityAssociation.navbar.navbar_link2")}</p>
      </div>
      <div className="council-bottom">
        <span className="council--span">
          <h5>{t("expert.country")}</h5>
          <img src={Globe} alt="error" />
        </span>
        {data?.map((data) => (
          <span className="council-span" key={data.id}>
            <h5>{data?.name}</h5>
            <p>{data?.count}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default CommunityEventCouncilStatics;
