import React from "react";
import "./associationsEvents.scss";

import { InformationServicesSlider } from "../../../../InformationServices/InformationServicesSlider/InformationServicesSlider";
import ArrowRight from "../../../../../assets/images/informationServices/arrowRight.png";
import { Pagination, Spinner } from "../../../../../component";
import { useCommunityEventsFetching } from "./hooks/useCommunityEventsFetching";
import { useTranslation } from "react-i18next";
import { CommunityCard } from "../../components";
import { paginationCount } from "../../../../../helpers/extraFunction";

const AssociationsEvents = () => {
  const { data, dataLoading, paginationFetching, page } =
    useCommunityEventsFetching();
  const { t } = useTranslation();

  if (dataLoading) {
    return <Spinner position="full" />;
  }
  const pagination = paginationCount(data?.total, 6);

  return (
    <div className="associations__events__page">
      <div className="container associations__events__container">
        <div className="associations__events__top">
          <h2>{t("events")}</h2>
          <p>
            {t("communityAssociation.navbar.navbar_link1")}{" "}
            <img src={ArrowRight} alt="breadcrumb line" />
            <span>{t("communityAssociation.navbar.navbar_link3")}</span>
          </p>
        </div>
        <InformationServicesSlider data={data?.data} />
        <div className="events__cards">
          {data?.data?.map((card) => (
            <div className="main-content-card" key={card.id}>
              <CommunityCard
                {...card}
                pathUrl="portal-category/community-association/event"
              />
            </div>
          ))}
        </div>
        {pagination > 1 ? (
          <div className="associations__events__paginator">
            <Pagination
              page={page}
              paginationFetching={paginationFetching}
              count={pagination}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AssociationsEvents;
