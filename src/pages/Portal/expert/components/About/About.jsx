import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";
import CouncilStatics from "../../pages/ExpertHome/components/Council/CouncilStatics";
import "./About.scss";
import { PageTop } from "../../../communityAssociation/components";

function About({ aboutData, expertCount }) {
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
            <img src={aboutData?.img1} alt="img" className="about-left-img" />
            <h3 className="about-title">{aboutData?.title2}</h3>
            <p className="about-text">{aboutData?.desc1}</p>
            {aboutData?.img2 && <img src={aboutData?.img2} alt="img" />}
            <p className="about-text">{aboutData?.desc2}</p>
            <ShareFriends />
          </div>
          <CouncilStatics expertCount={expertCount} />
        </div>
      </div>
    </div>
  );
}
export default About;
