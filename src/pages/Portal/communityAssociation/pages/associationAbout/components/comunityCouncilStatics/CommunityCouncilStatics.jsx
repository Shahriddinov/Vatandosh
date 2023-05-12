import React from "react";
import { useTranslation } from "react-i18next";
import { UserIcon } from "../../../../../../../assets/images/communityAssociation";
import { Globe } from "../../../../../../../assets/images/expert";

const CommunityCouncilStatics = ({ allCommunityGet, allRegions }) => {
  const { t } = useTranslation();

  const data = allRegions
    .filter((el) => el.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  console.log(data);
  return (
    <div className="community-home-council-right">
      <div>
        <span className="community-home-council__span">
          <h5>{t("expert.registered")}</h5>
          <img src={UserIcon} alt="error" />
        </span>
        <h4>{allCommunityGet?.total}</h4>
        <p>{t("communityAssociation.navbar.navbar_link2")}</p>
      </div>
      <div className="community-home-council__bottom">
        <span className="community-home-council__span">
          <h5>{t("expert.country")}</h5>
          <img src={Globe} alt="error" />
        </span>
        {data?.map((data) => (
          <span className="community-home-council-span" key={data?.id}>
            <h5>{data.name}</h5>
            <p>{data.count}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default CommunityCouncilStatics;
