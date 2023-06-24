import ExpertTitle from "../../../expert/components/ExpertTitle/ExpertTitle";
import CouncilStatics from "../VolunterHome/components/Council/CouncilStatics";
import "./VolunterActivityDetail.scss";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useVolunteerHomeFetching } from "../VolunterHome/hooks/useVolunteerHomeFetching";
import { getVolunteerActivityOne } from "../../../../../reduxToolkit/volunteer/extraReducer";
import { Spinner } from "../../../../../component";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";

export default function VolunterActivityDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { t } = useTranslation();

  const url = [
    { title: t("expert.main"), url: "/portal-category/volunteer" },
    { title: t("volunteryWork"), url: "#" },
  ];

  const volunteerActivityOne = useSelector(
    (state) => state.volunteerSlice.volunteerActivityOne
  );

  const loading = useSelector(
    (state) => state.volunteerSlice.volunteerActivityOneLoading
  );

  useEffect(() => {
    dispatch(getVolunteerActivityOne({ id }));
  }, [dispatch, id]);

  const { VolunteerCount } = useVolunteerHomeFetching();
  const dataCount = VolunteerCount.map((el) => el.users).flat();

  if (loading) {
    return <Spinner position="full" />;
  }

  return (
    <main className="volunteractivitydetail">
      <div className="container">
        <ExpertTitle title={"Volontyorlarni faoliyati"} url={url} />
        <div className="volunteractivitydetail-main">
          <div className="volunteractivitydetail-main-detail">
            <div className="volunteractivitydetail-main-detail-desc-img">
              <img
                src={`${PORTAL_IMAGE_URL}${volunteerActivityOne?.images[0]}`}
                alt=""
              />
            </div>
            <div className="volunteractivitydetail-main-detail-desc-action">
              <div className="volunteractivitydetail-main-detail-desc-action-date-viewers">
                <div className="volunteractivitydetail-main-detail-desc-action-date">
                  <BsFillCalendar2EventFill />
                  <span>{volunteerActivityOne?.created_at.split("T")[0]}</span>
                </div>
                <div className="volunteractivitydetail-main-detail-desc-action-viewers">
                  <AiFillEye />
                  <span>{volunteerActivityOne?.viewers}</span>
                </div>
              </div>
              {/* <div className="volunteractivitydetail-main-detail-desc-action-tags">
                {[
                  t("voluntery.nav2"),
                  t("volunterySport"),
                  t("voluntery.voluntery"),
                ].map((el, index) => {
                  return <span key={index}>{el}</span>;
                })}
              </div>*/}
            </div>
            <h3 className="volunteractivitydetail-main-detail-title">
              {volunteerActivityOne.title}
            </h3>
            <div className="volunteractivitydetail-main-detail-text">
              <p
                dangerouslySetInnerHTML={{
                  __html: volunteerActivityOne.description,
                }}
              />
            </div>
            <ShareFriends />
          </div>
          <CouncilStatics
            count={{ total: dataCount.length }}
            VolunteerCount={VolunteerCount}
          />
        </div>
      </div>
    </main>
  );
}
