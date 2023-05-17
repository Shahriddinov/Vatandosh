import "./comunityEventsDetail.scss";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { ShareFriends, Spinner } from "../../../../../component";
import { useCommunityEventsDetailFetching } from "./hooks/useCommunityEventsDetailFetching";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { getDate } from "../../../../../config/constants";
import { CommunityEventCouncilStatics } from "./components";

export default function CommunityEventsDetail() {
  const {
    oneEventsDetail,
    oneEventsDetailLoading,
    error,
    allCommunityGet,
    allCommunityGetLoading,
    allRegions,
    allRegionsGetLoading,
  } = useCommunityEventsDetailFetching();

  const url = [
    { title: "Asosiy", url: "/portal-category/community-association" },
    { title: "Tadbirlar", url: "#" },
  ];

  if (
    oneEventsDetailLoading ||
    allCommunityGetLoading ||
    allRegionsGetLoading
  ) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="volunteractivitydetail">
      <div className="container">
        <div className="volunteractivitydetail-main">
          <div className="volunteractivitydetail-main-detail">
            <div className="volunteractivitydetail-main-detail-desc-img">
              <img
                src={`${PORTAL_IMAGE_URL}${oneEventsDetail?.image}`}
                alt=""
              />
            </div>
            <div className="volunteractivitydetail-main-detail-desc-action">
              <div className="volunteractivitydetail-main-detail-desc-action-date-viewers">
                <div className="volunteractivitydetail-main-detail-desc-action-date">
                  <BsFillCalendar2EventFill />
                  <span>
                    <span>
                      {getDate(oneEventsDetail?.date).getDay().length > 2
                        ? getDate(oneEventsDetail?.date).getDay()
                        : `0${getDate(oneEventsDetail?.date).getDay()}`}
                    </span>
                    .
                    <span>
                      {getDate(oneEventsDetail?.date).getMonth().length > 2
                        ? getDate(oneEventsDetail?.date).getMonth()
                        : `0${getDate(oneEventsDetail?.date).getMonth()}`}
                    </span>
                    .<span>{getDate(oneEventsDetail?.date).getFullYear()}</span>
                  </span>
                </div>
                <div className="volunteractivitydetail-main-detail-desc-action-viewers">
                  <AiFillEye />
                  <span>
                    {" "}
                    {oneEventsDetail?.view.toString().length >= 4
                      ? oneEventsDetail?.view % 1000 > 1
                        ? (oneEventsDetail?.view / 1000).toFixed(1) + "K"
                        : (oneEventsDetail?.view / 1000).toFixed()
                      : oneEventsDetail?.view}
                  </span>
                </div>
              </div>
              <div className="volunteractivitydetail-main-detail-desc-action-tags">
                {oneEventsDetail?.tags
                  ? oneEventsDetail?.tags?.split(",").map((el, index) => {
                      return <span key={index}>{el}</span>;
                    })
                  : null}
              </div>
            </div>
            <h3 className="volunteractivitydetail-main-detail-title">
              {oneEventsDetail?.title}
            </h3>
            <div className="volunteractivitydetail-main-detail-text">
              <div
                dangerouslySetInnerHTML={{ __html: oneEventsDetail?.body }}
              />
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
