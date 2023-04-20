import React from "react";
import { PageTop } from "../../../communityAssociation/components";
import { ShareFriends } from "../../../../../component";
import WebinarCouncilStatics from "../WebinarHome/components/WebinarCouncil/WebinarCouncilStatics";
import { aboutData } from "./data";

function WebinarAbout() {
  const pageTopData = {
    title: aboutData?.title,
    pathUrl: [
      {
        id: 1,
        pathUrl: aboutData?.path.pageHomeUrl,
        label: aboutData?.path.pageHomeName,
        active: false,
      },
      {
        id: 2,
        pathUrl: null,
        label: aboutData?.path.pageName,
        active: true,
      },
    ],
  };
  return (
    <div className="about">
      <div className="container">
        <PageTop pageTopData={pageTopData} />
        <div className="about-page">
          <div className="about-left">
            <img src={aboutData?.img1} alt="img" />
            <h3 className="about-title">{aboutData?.title2}</h3>
            <p className="about-text">{aboutData?.desc1}</p>
            <img src={aboutData?.img2} alt="img" />
            <p className="about-text">{aboutData?.desc2}</p>
            <ShareFriends />
          </div>
          <WebinarCouncilStatics />
        </div>
      </div>
    </div>
  );
}

export default WebinarAbout;
