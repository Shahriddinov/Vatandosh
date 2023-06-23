import React from "react";

import "./expertActivityDerail.scss";
import ExpertTitle from "../../components/ExpertTitle/ExpertTitle";
import { ShareFriends, Spinner } from "../../../../../component";
import CouncilStatics from "../../../volunter/pages/VolunterHome/components/Council/CouncilStatics";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { useExportActivityDetail } from "./hooks/useExpertActivityDetail";

const ExpertActivityDerail = () => {
  const { expertCount, expertCountLoading, loading, oneData, t } =
    useExportActivityDetail();

  const url = [
    { title: t("expert.main"), url: "/portal-category/volunteer" },
    { title: t("volunteryWork"), url: "#" },
  ];

  if (loading || expertCountLoading) {
    return <Spinner position="full" />;
  }

  const dataCount = expertCount.map((el) => el.users).flat();

  return (
    <main className="expert_activity_detail">
      <div className="container">
        <ExpertTitle title={"Expertni faoliyati"} url={url} />
        <div className="expert_activity_detail-main">
          <div className="expert_activity_detail-main-detail">
            <div className="expert_activity_detail-main-detail-desc-img">
              <img src={`${PORTAL_IMAGE_URL}${oneData?.images[0]}`} alt="" />
            </div>
            <div className="expert_activity_detail-main-detail-desc-action">
              <div className="expert_activity_detail-main-detail-desc-action-date-viewers">
                <div className="expert_activity_detail-main-detail-desc-action-date">
                  <BsFillCalendar2EventFill />
                  <span>{oneData?.created_at.split("T")[0]}</span>
                </div>
                <div className="expert_activity_detail-main-detail-desc-action-viewers">
                  <AiFillEye />
                  <span>{oneData?.viewers}</span>
                </div>
              </div>
              {/* <div className="expert_activity_detail-main-detail-desc-action-tags">
                {[
                  t("voluntery.nav2"),
                  t("volunterySport"),
                  t("voluntery.voluntery"),
                ].map((el, index) => {
                  return <span key={index}>{el}</span>;
                })}
              </div>*/}
            </div>
            <h3 className="expert_activity_detail-main-detail-title">
              {oneData.title}
            </h3>
            <div className="expert_activity_detail-main-detail-text">
              <p
                dangerouslySetInnerHTML={{
                  __html: oneData.description,
                }}
              />
            </div>
            <ShareFriends />
          </div>
          <CouncilStatics
            count={{ total: dataCount.length }}
            VolunteerCount={expertCount}
          />
        </div>
      </div>
    </main>
  );
};

export default ExpertActivityDerail;
