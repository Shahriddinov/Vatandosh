import React, { useState } from "react";
import "./associationsEvents.scss";

import { InformationServicesSlider } from "../../../../InformationServices/InformationServicesSlider/InformationServicesSlider";
import Card from "../../../../../component/card/Card";
import ArrowRight from "../../../../../assets/images/informationServices/arrowRight.png";
import { useTranslation } from "react-i18next";
import { Pagination, Spinner } from "../../../../../component";
import { useInView } from "react-intersection-observer";
import { useInformationServicesPagination } from "../../../../InformationServices/hooks/useInformationServicesPagination";

const AssociationsEvents = () => {
  const   {paginationFetching,
  page,
  paginationData,
  paginationCount,
  paginationLoading,
  loading,
  pageName,
  t,
} = useInformationServicesPagination()

  if(paginationLoading) {
    return <Spinner position="full"/>
  }


  return (
    <div className="container associations__events__container">
      <div className="associations__events__top">
        <h2>{t("events")}</h2>
        <p>
          {t("communityAssociation.navbar.navbar_link1")}{" "}
          <img src={ArrowRight} alt="breadcrumb line" />
          <span>{t("communityAssociation.navbar.navbar_link3")}</span>
        </p>
      </div>
      <InformationServicesSlider data={paginationData[0].data} />
      <div className="events__cards">
        {paginationData[0].data.map((card) => (
          <div className="main-content-card" key={card.id}>
            <Card {...card} pathUrl={pageName} />
          </div>
        ))}
      </div>
      {paginationCount >= 1 ? (
        <div className="associations__events__paginator">
          <Pagination
            page={page}
            paginationFetching={paginationFetching}
            count={paginationCount}
          />
        </div>
      ) : null}
    </div>
  );
};

export default AssociationsEvents;
