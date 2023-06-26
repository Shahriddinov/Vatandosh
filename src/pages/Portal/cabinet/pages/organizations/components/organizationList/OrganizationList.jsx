import React from "react";

import "./organizationList.scss";
import OrganizationCard from "../organizationCard/OrganizationCard";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const OrganizationList = ({ data }) => {
  const { t } = useTranslation();
  const allRegions = useSelector((store) => store.community.allRegionsGet);
  return (
    <>
      {data.length > 0 ? (
        <ul className="organization-list">
          {data.map((el) => (
            <OrganizationCard el={el} key={el.id} allRegions={allRegions} />
          ))}
        </ul>
      ) : (
        <p>{t("jamoatOne")}</p>
      )}
    </>
  );
};

export default OrganizationList;
