import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Nav, Navbar } from "../../../expert/components";
import { PortalMiniSlider } from "../../../components/portalMiniSlider/PortalMiniSlider";
import { Spinner } from "../../../../../component";
import {
  AddNewsModal,
  CommunityAssociationCompanyOffer,
  CommunityAssociationHero,
  CommunityFriendshipInfo,
} from "./components";
import { useModalActive } from "./hooks";
import { useAssociationFetching } from "../associations/hooks/useAssociationFetching";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { ToastContainer, toast } from "react-toastify";

//scss files
import "./communityAssociationDetail.scss";

import "react-toastify/dist/ReactToastify.css";
import { useCommunityDetailFetching } from "./hooks/useCommunityDetailFetching";

const CommunityAssociationDetail = () => {
  const { navData, navbarUrl } = useOutletContext();
  const { t } = useTranslation();
  const { open, changeOpen } = useModalActive();
  const { communityCountryId, communityCountry } = useParams();

  const {
    allRegions,
    allRegionsGetLoading,
    allCommunityGet,
    allCommunityGetLoading,
    eventsData,
    eventsDataLoading,
  } = useCommunityDetailFetching();

  if (eventsDataLoading || allRegionsGetLoading || allCommunityGetLoading) {
    return <Spinner position="full" />;
  }

  const findCountryCategoryData = allRegions.find(
    (el) => el.id === communityCountry * 1
  );

  const findCountry = allCommunityGet?.data?.find(
    (el) => el.id === communityCountryId * 1
  );

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="community-association-detail">
        <div
          className="community-association-detail__top"
          style={{
            backgroundImage: `url(${PORTAL_IMAGE_URL}${findCountry?.b_image})`,
          }}
        >
          <Navbar navbarUrl={navbarUrl} />
          <Nav navData={navData} />

          <CommunityAssociationHero
            data={{ findCountry, findCountryCategoryData }}
            handleOpen={changeOpen}
          />
        </div>

        <CommunityFriendshipInfo {...findCountry} />
        <CommunityAssociationCompanyOffer {...findCountry} />
        <PortalMiniSlider
          title={`${t("events")}`}
          data={eventsData?.data}
          fetchUrl="portal-category/community-association/event"
        />

        <AddNewsModal
          open={open}
          handleClose={changeOpen}
          toast={toast}
          id={findCountry?.id}
        />
      </div>
    </>
  );
};

export default CommunityAssociationDetail;
