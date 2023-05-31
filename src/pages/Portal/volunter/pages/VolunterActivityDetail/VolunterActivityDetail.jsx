import ExpertTitle from "../../../expert/components/ExpertTitle/ExpertTitle";
import CouncilStatics from "../VolunterHome/components/Council/CouncilStatics";
import img from "../../../../../assets/images/mediateka/4.png";
import "./VolunterActivityDetail.scss";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNews } from "../../../../../reduxToolkit/newsSlice/extraReducer";
import { useEffect } from "react";
import { useVolunteerHomeFetching } from "../VolunterHome/hooks/useVolunteerHomeFetching";

export default function VolunterActivityDetail() {
  const dispatch = useDispatch();
  const lan = useSelector((state) => state.language.language);
  const url = [
    { title: "Asosiy", url: "/portal-category/volunteer" },
    { title: "Volontyorlar ishlari", url: "#" },
  ];

  const { id } = useParams();
  const { t } = useTranslation();
  const newsData = useSelector((state) =>
    state.newsSlice?.newsData?.find((evt) => evt?.id === Number(id))
  );

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  const { VolunteerCount } = useVolunteerHomeFetching();
  const dataCount = VolunteerCount.map((el) => el.users).flat();
  return (
    <main className="volunteractivitydetail">
      <div className="container">
        <ExpertTitle title={"Volontyorlarni faoliyati"} url={url} />
        <div className="volunteractivitydetail-main">
          <div className="volunteractivitydetail-main-detail">
            <div className="volunteractivitydetail-main-detail-desc-img">
              <img src={img} alt="" />
            </div>
            <div className="volunteractivitydetail-main-detail-desc-action">
              <div className="volunteractivitydetail-main-detail-desc-action-date-viewers">
                <div className="volunteractivitydetail-main-detail-desc-action-date">
                  <BsFillCalendar2EventFill />
                  <span>{newsData?.data}</span>
                </div>
                <div className="volunteractivitydetail-main-detail-desc-action-viewers">
                  <AiFillEye />
                  <span>{newsData?.viewers}</span>
                </div>
              </div>
              <div className="volunteractivitydetail-main-detail-desc-action-tags">
                {[
                  "Volontyorlar faoliyati",
                  "Yosh sportchi volontyorlar",
                  "Volontyorlar",
                ].map((el, index) => {
                  return <span key={index}>{el}</span>;
                })}
              </div>
            </div>
            <h3 className="volunteractivitydetail-main-detail-title">
              {newsData[`title_${lan}`]}
            </h3>
            <div className="volunteractivitydetail-main-detail-text">
              <p
                dangerouslySetInnerHTML={{
                  __html: newsData[`text_${lan}`],
                }}
              />
            </div>
            <ShareFriends />
          </div>
          <CouncilStatics
            count={dataCount.length}
            VolunteerCount={VolunteerCount}
          />
        </div>
      </div>
    </main>
  );
}
