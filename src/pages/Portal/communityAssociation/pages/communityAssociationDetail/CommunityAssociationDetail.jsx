import React, { useEffect } from "react";
import "./communityAssociationDetail.scss";
import { CountryFlag } from "../../../../../assets/images/communityAssociation";
import { useOutletContext } from "react-router-dom";
import Navbar from "../../../expert/components/Navbar/Navbar";
import Nav from "../../../expert/components/Nav/Nav";
import { CommunityIntroData, communityAssociationHeroData } from "./data";
import StatesFriendshipInfo from "../../../../compatriots/components/statesFriendshipInfo";
import { MiniSlider } from "../../../../../component/miniSlider/MiniSlider";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  CommunityAssociationCompanyOffer,
  CommunityAssociationHero,
} from "./components";
import { getEvents } from "../../../../../reduxToolkit/eventsSlice/extraReducer";
import { Spinner } from "../../../../../component";
import { useState } from "react";
import AddNewsModal from "./components/addNewsModal/AddNewsModal";

const CommunityAssociationDetail = () => {
  const [activeModal, setActiveModal] = useState(true);
  const { navData, navbarUrl } = useOutletContext();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventsSlice.eventsData);
  const loading = useSelector((state) => state.eventsSlice.loading);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!events.length) {
      dispatch(getEvents());
    }
  }, []);

  if (loading) {
    return <Spinner position="full" />;
  }

  return (
    <div className="community-association-detail">
      <div
        className="community-association-detail__top"
        style={{ backgroundImage: `url(${CountryFlag})` }}
      >
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />

        <CommunityAssociationHero
          data={communityAssociationHeroData}
          handleOpen={handleOpen}
        />
      </div>

      <StatesFriendshipInfo {...CommunityIntroData} />
      <CommunityAssociationCompanyOffer {...CommunityIntroData} />
      <MiniSlider title={`${t("events")}`} data={events} fetchUrl="events" />

      {activeModal && <AddNewsModal open={open} handleClose={handleClose} />}
    </div>
  );
};

export default CommunityAssociationDetail;
