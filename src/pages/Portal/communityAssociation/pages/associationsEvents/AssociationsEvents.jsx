import React from "react";
import "./associationsEvents.scss";

import { InformationServicesSlider } from "../../../../InformationServices/InformationServicesSlider/InformationServicesSlider";
import Card from "../../../../../component/card/Card";
import ArrowRight from "../../../../../assets/images/informationServices/arrowRight.png";
import { Pagination, Spinner } from "../../../../../component";
import { useCommunityEventsFetching } from "./hooks/useCommunityEventsFetching";
import { useTranslation } from "react-i18next";
import { CommunityCard } from "../../components";

const AssociationsEvents = () => {
  const { data, dataLoading, paginationFetching } =
    useCommunityEventsFetching();
  const { t } = useTranslation();

  if (dataLoading) {
    return <Spinner position="full" />;
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
      <InformationServicesSlider data={data} />
      <div className="events__cards">
        {data.map((card) => (
          <div className="main-content-card" key={card.id}>
            <CommunityCard {...card} pathUrl="events" />
          </div>
        ))}
      </div>
      {2 >= 1 ? (
        <div className="associations__events__paginator">
          <Pagination
            page={1}
            paginationFetching={paginationFetching}
            count={10}
          />
        </div>
      ) : null}
    </div>
  );
};

export default AssociationsEvents;
