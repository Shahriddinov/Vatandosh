import "./OnlineWebinar.scss";
import "../../../victorina/pages/VictorinaProject/VictorinaProject.scss";
import { ExpertTitle } from "../../../expert/components";
import { useTranslation } from "react-i18next";
import CouncilStatics from "../../../expert/pages/ExpertHome/components/Council/CouncilStatics1";
import img from "../../../../../assets/images/portal/5.png";
import { Link, useLocation, useParams } from "react-router-dom";
import ExpertProfileInfo from "../../../expert/pages/ExpertOffers/components/ExpertProfileInfo";
import { ShareFriends, Spinner } from "../../../../../component";
import { getMeetingOne } from "../../../../../reduxToolkit/portalSlices/meetingSlice/extraReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";

export default function OnlineWebinar() {
  const { id } = useParams();
  const meetingOnedata = useSelector(
    (store) => store.meetingSlice.meetingOnedata
  );
  const meetingOneLoading = useSelector(
    (store) => store.meetingSlice.meetingOneLoading
  );
  const meetingError = useSelector((store) => store.meetingSlice.error);
  console.log(meetingOnedata);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeetingOne(id));
  }, []);

  const { pathname } = useLocation();
  const { t } = useTranslation();
  const url = [
    { title: t("expert.main"), url: "" },
    { title: t("webinar.webinars"), url: "" },
  ];

  const targetDate = new Date(meetingOnedata.start_date);
  const [timeRemaining, setTimeRemaining] = useState({});
  const remainingTime = () => {
    const now = new Date();
    const diffTime = targetDate - now;

    if (diffTime > 0) {
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));

      setTimeRemaining({
        days: days,
        hours: hours,
        minutes: minutes,
      });
    }
  };

  useEffect(() => {
    let intervalId;
    if (!meetingOneLoading) {
      remainingTime();
    }

    intervalId = setInterval(() => {
      remainingTime();
    }, 60000); // Update every 60 seconds
    return () => clearInterval(intervalId);
  }, [meetingOneLoading]);

  if (meetingOneLoading) {
    return <Spinner />;
  } else if (meetingError) {
    return <p>Error</p>;
  }

  return (
    <>
      <main className="online-webinar">
        <div className="container">
          <ExpertTitle title={meetingOnedata.title} url={url} />
          <div className="online-webinar-wrapper">
            <div className="online-webinar-main">
              <div className="victorinaproject-main">
                <img
                  src={`${PORTAL_IMAGE_URL}${meetingOnedata.image}`}
                  alt="error"
                />
                {pathname.includes("finished-projects") ? (
                  <button className="victorinaproject-main-btn">
                    {t("victorina.endproject")}
                  </button>
                ) : (
                  <>
                    <div className="victorinaproject-main-timer">
                      <div>
                        <span>{timeRemaining.days}</span>
                        <span>Kun</span>
                      </div>
                      <div>
                        <span>{timeRemaining.hours}</span>
                        <span>Soat</span>
                      </div>
                      <div>
                        <span>{timeRemaining.minutes}</span>
                        <span>Daqiqa</span>
                      </div>
                    </div>
                    {meetingOnedata.status == 1 ? (
                      <Link
                        to={`/portal-category/webinar/webinar-register/${meetingOnedata.id}`}
                        className="victorinaproject-main-btn victorinaproject-main-btnActive"
                      >
                        {t("webinar.join-webinar")}
                      </Link>
                    ) : (
                      <Link className="victorinaproject-main-btn">
                        Vebinar yakunlangan
                      </Link>
                    )}
                  </>
                )}
                {meetingOnedata.speakers?.map((speaker) => (
                  <ExpertProfileInfo
                    key={speaker.id}
                    profileImg={`${PORTAL_IMAGE_URL}${speaker.image}`}
                    name={speaker.full_name}
                    address={speaker.special}
                    position={speaker.info}
                  />
                ))}
                <div className="victorinaproject-main-desc">
                  <h3>Onlayn vebinarni o’tkazishdan maqsadi</h3>
                  <div className="victorinaproject-main-desc-action">
                    <div className="victorinaproject-main-desc-action-date">
                      <span className="online-webinar-date">
                        {t("webinar.date")}
                      </span>
                      <span>
                        {new Date(meetingOnedata.start_date)
                          .toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric",
                          })
                          .replace(/\//g, ".")}
                      </span>
                    </div>
                  </div>
                  <p>{meetingOnedata.description}</p>
                </div>
              </div>
              <ShareFriends />
            </div>
            <CouncilStatics meetingOnedata={meetingOnedata} />
          </div>
        </div>
      </main>
    </>
  );
}
