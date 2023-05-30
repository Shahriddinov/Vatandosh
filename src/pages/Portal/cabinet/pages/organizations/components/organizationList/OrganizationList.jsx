import React from "react";

import "./organizationList.scss";
import OrganizationCard from "../organizationCard/OrganizationCard";
import { useSelector } from "react-redux";
const OrganizationList = ({ data }) => {
  //   console.log(data);
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
        <p>Jamoat birlashmalari ma'vjud emas</p>
      )}
    </>
  );
};

export default OrganizationList;
