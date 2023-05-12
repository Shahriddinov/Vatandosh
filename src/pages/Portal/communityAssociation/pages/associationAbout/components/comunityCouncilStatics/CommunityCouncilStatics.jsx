import React from "react";
import { useTranslation } from "react-i18next";
import { UserIcon } from "../../../../../../../assets/images/communityAssociation";
import { Globe } from "../../../../../../../assets/images/expert";

const data = [
  {
    id: 1,
    country: "Rossiya",
    number: 24,
  },
  {
    id: 2,
    country: "Turkiya",
    number: 18,
  },
  {
    id: 3,
    country: "Germaniya",
    number: 16,
  },
  {
    id: 4,
    country: "Rossiya",
    number: 8,
  },
  {
    id: 5,
    country: "Malayziya",
    number: 4,
  },
  {
    id: 6,
    country: "Rossiya",
    number: 2,
  },
];

const CommunityCouncilStatics = ({ allCommunityGet }) => {
  const { t } = useTranslation();
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
        {data.map((data) => (
          <span className="community-home-council-span" key={data.id}>
            <h5>{data.country}</h5>
            <p>{data.number}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default CommunityCouncilStatics;
