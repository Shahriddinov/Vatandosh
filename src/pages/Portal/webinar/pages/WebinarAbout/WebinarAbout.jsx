import React, { useEffect } from "react";
import { PageTop } from "../../../communityAssociation/components";
import { ShareFriends, Spinner } from "../../../../../component";
// import WebinarCouncilStatics from "../WebinarHome/components/WebinarCouncil/WebinarCouncilStatics";
import { aboutData } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { getPortalNews } from "../../../../../reduxToolkit/portalSlices/portalNewsSlice/portalNewsSlice";
import { getMeetingPage } from "../../../../../reduxToolkit/portalSlices/meetingSlice/extraReducer";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import WebinarCouncilStatics from "../WebinarHome/components/WebinarCouncil/WebinarCouncilStatics";

function WebinarAbout() {
  const language = useSelector((store) => store.language.language);
  const meetingPage = useSelector((store) => store.meetingSlice.pageData);
  const meetingPageLoading = useSelector(
    (store) => store.meetingSlice.pageLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeetingPage());
  }, [language]);

  const pageTopData = {
    title: aboutData?.title,
    pathUrl: [
      {
        id: 1,
        pathUrl: "/portal-category/webinar",
        label: "Asosiy",
        active: false,
      },
      {
        id: 2,
        pathUrl: null,
        label: "Webinarlar haqida",
        active: true,
      },
    ],
  };

  console.log(aboutData);

  if (meetingPageLoading) {
    return <Spinner />;
  }
  return (
    <div className="about">
      <div className="container">
        <PageTop pageTopData={pageTopData} />
        <div className="about-page">
          <div className="about-left">
            <img src={`${PORTAL_IMAGE_URL}${meetingPage?.image}`} alt="img" />
            <h3 className="about-title">{meetingPage?.title}</h3>
            <p className="about-text">{meetingPage?.body}</p>
            <img src={`${PORTAL_IMAGE_URL}${meetingPage?.image}`} alt="img" />
            <p className="about-text">{meetingPage?.body}</p>
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
