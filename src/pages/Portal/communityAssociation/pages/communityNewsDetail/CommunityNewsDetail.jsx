import { BsFillCalendar2EventFill } from "react-icons/bs";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { getDate } from "../../../../../config/constants";
import { ShareFriends, Spinner } from "../../../../../component";
import { AiFillEye } from "react-icons/ai";
import { useCommunityNewsDetail } from "./hooks/useCommunityNewsDetail";
import { CommunityEventCouncilStatics } from "../communityEventsDetail/components";

import "./communityNewsDetail.scss";

export default function CommunityNewsDetail() {
  const {
    oneNewsDetail,
    oneNewsLoading,
    error,
    allCommunityGet,
    allCommunityGetLoading,
    allRegions,
    allRegionsGetLoading,
  } = useCommunityNewsDetail();

  if (oneNewsLoading || allCommunityGetLoading || allRegionsGetLoading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="community_news_detail">
      <div className="container">
        <div className="community_news_detail-main">
          <div className="community_news_detail-main-detail">
            <div className="community_news_detail-main-detail-desc-img">
              <img src={`${PORTAL_IMAGE_URL}${oneNewsDetail?.image}`} alt="" />
            </div>
            <div className="community_news_detail-main-detail-desc-action">
              <div className="community_news_detail-main-detail-desc-action-date-viewers">
                <div className="community_news_detail-main-detail-desc-action-date">
                  <BsFillCalendar2EventFill />
                  <span>
                    <span>
                      {getDate(oneNewsDetail?.created_at).getDay().length > 2
                        ? getDate(oneNewsDetail?.created_at).getDay()
                        : `0${getDate(oneNewsDetail?.created_at).getDay()}`}
                    </span>
                    .
                    <span>
                      {getDate(oneNewsDetail?.created_at).getMonth().length > 2
                        ? getDate(oneNewsDetail?.created_at).getMonth()
                        : `0${getDate(oneNewsDetail?.created_at).getMonth()}`}
                    </span>
                    .
                    <span>
                      {getDate(oneNewsDetail?.created_at).getFullYear()}
                    </span>
                  </span>
                </div>
                <div className="community_news_detail-main-detail-desc-action-viewers">
                  <AiFillEye />
                  <span>
                    {" "}
                    {oneNewsDetail?.view?.toString().length >= 4
                      ? oneNewsDetail?.view % 1000 > 1
                        ? (oneNewsDetail?.view / 1000).toFixed(1) + "K"
                        : (oneNewsDetail?.view / 1000).toFixed()
                      : oneNewsDetail?.view}
                  </span>
                </div>
              </div>
              <div className="community_news_detail-main-detail-desc-action-tags">
                {oneNewsDetail?.tags
                  ? oneNewsDetail?.tags.map((el, index) => {
                      return <span key={index}>{el}</span>;
                    })
                  : null}
              </div>
            </div>
            <h3 className="community_news_detail-main-detail-title">
              {oneNewsDetail?.title}
            </h3>
            <div className="community_news_detail-main-detail-text">
              <div dangerouslySetInnerHTML={{ __html: oneNewsDetail?.body }} />
            </div>
            <ShareFriends />
          </div>
          <CommunityEventCouncilStatics
            allCommunityGet={allCommunityGet}
            allRegion={allRegions}
          />
        </div>
      </div>
    </main>
  );
}
