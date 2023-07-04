import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";
import CouncilStatics from "../../pages/ExpertHome/components/Council/CouncilStatics";
import "./About.scss";
import { PageTop } from "../../../communityAssociation/components";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import FotoGallery from "../../../../../component/FotoGallery/FotoGallery";
import { PortalMiniSlider } from "../../../components/portalMiniSlider/PortalMiniSlider";
import { useTranslation } from "react-i18next";

function About({ aboutData, expertCount, newsData }) {
  const { t } = useTranslation();
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
            <img
              src={`${PORTAL_IMAGE_URL}${aboutData?.img1}`}
              alt="img"
              className="about-left-img"
            />
            <h3 className="about-title">{aboutData?.title1}</h3>
            <p
              className="about-text"
              dangerouslySetInnerHTML={{ __html: aboutData?.desc1 }}
            />
            <div>
              <ShareFriends />
            </div>
          </div>
          <CouncilStatics expertCount={expertCount} />
        </div>
      </div>
      <PortalMiniSlider
        title={`${t("news")}`}
        data={newsData}
        fetchUrl="detail/all-news/new"
      />
      <FotoGallery images={aboutData.images} />
    </div>
  );
}
export default About;
