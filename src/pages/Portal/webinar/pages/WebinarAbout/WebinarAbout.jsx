import React, { useEffect } from "react";
import { PageTop } from "../../../communityAssociation/components";
import { ShareFriends, Spinner } from "../../../../../component";
import { aboutData } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { getMeetingPage } from "../../../../../reduxToolkit/portalSlices/meetingSlice/extraReducer";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import WebinarCouncilStatics from "../WebinarHome/components/WebinarCouncil/WebinarCouncilStatics";
import { useTranslation } from "react-i18next";

function WebinarAbout() {
  const { t } = useTranslation();
  const language = useSelector((store) => store.language.language);
  const meetingPage = useSelector((store) => store.meetingSlice.pageData);
  const meetingPageLoading = useSelector(
    (store) => store.meetingSlice.pageLoading
  );
  const meetingsPageDataError = useSelector(
    (store) => store.meetingSlice.meetingsPageDataError
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeetingPage());
  }, [language, dispatch]);

  const pageTopData = {
    title: aboutData?.title,
    pathUrl: [
      {
        id: 1,
        pathUrl: "/portal-category/webinar",
        label: t("expert.main"),
        active: false,
      },
      {
        id: 2,
        pathUrl: null,
        label: t("webinarAbout"),
        active: true,
      },
    ],
  };

  if (meetingPageLoading) {
    return <Spinner />;
  } else if (meetingsPageDataError) {
    return <p>{meetingsPageDataError}</p>;
  }
  return (
    <div className="about">
      <div className="container">
        <PageTop pageTopData={pageTopData} />
        <div className="about-page">
          <div className="about-left">
            <img src={`${PORTAL_IMAGE_URL}${meetingPage?.image}`} alt="img" />
            <h3 className="about-title">{meetingPage?.title}</h3>
            <p
              className="about-text"
              dangerouslySetInnerHTML={{ __html: meetingPage.body }}
            />
            <img src={`${PORTAL_IMAGE_URL}${meetingPage?.image}`} alt="img" />
            <p
              className="about-text"
              dangerouslySetInnerHTML={{ __html: meetingPage.body }}
            />
            <ShareFriends />
          </div>
          <WebinarCouncilStatics
            count={meetingPage.end_count}
            attendees={meetingPage.members}
            locations={meetingPage.locations}
          />
        </div>
      </div>
    </div>
  );
}

export default WebinarAbout;
