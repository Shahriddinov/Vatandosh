import "./MoreDetail.scss";
import Header from "../../../../component/Layout/Header/Header";
import calendarSvg from "../../../../assets/images/portal/cabinetVolunteer/calendar.svg";
import eyeSvg from "../../../../assets/images/portal/cabinetVolunteer/eye.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getQuizDataById } from "../../../../reduxToolkit/choicesPageSlice/extraReducer";
import { useTranslation } from "react-i18next";
import { PORTAL_IMAGE_URL } from "../../../../services/api/utils";
import square from "../../../../assets/images/choose/square.svg";
import facebook from "../../../../assets/images/choose/Facebook.svg";
import telegram from "../../../../assets/images/choose/telegramsvg.svg";
import twitter from "../../../../assets/images/choose/Twitter.svg";
import { timer } from "../../../../helpers/extraFunction";

const MoreDetail = () => {
  const [timeData, setTimeDate] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lan = useSelector((state) => state.language.language);
  const { t } = useTranslation();
  const { byIdData } = useSelector((state) => state.choiceQuizSlice);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getQuizDataById(id));
  }, [dispatch, lan, id]);

  useEffect(() => {
    const { interval } = timer({
      finishedTime: byIdData?.finished_at,
      setTimeDate: setTimeDate,
    });
    return () => {
      clearInterval(interval);
    };
  }, [byIdData?.finished_at]);

  return (
    <>
      <Header />
      <div className="singleCardContainer">
        <h1>{byIdData.title}</h1>
        <img src={`${PORTAL_IMAGE_URL}${byIdData.image}`} alt="rasm" />
        {byIdData?.status === 0 ? (
          <div className="singleCardContainer-timeOver">
            <p>{t("choices.quizIsOver")}</p>
          </div>
        ) : (
          <div className="singleCardContainer-timeCont">
            <div className="singleCardContainer-timeCont-inner">
              <span>{timeData.days}</span>
              <span>{t("choices.day")}</span>
            </div>
            <div className="singleCardContainer-timeCont-vl"></div>
            <div className="singleCardContainer-timeCont-inner">
              <span>{timeData.hours}</span>
              <span>{t("choices.hour")}</span>
            </div>
            <div className="singleCardContainer-timeCont-vl"></div>
            <div className="singleCardContainer-timeCont-inner">
              <span>{timeData.minutes}</span>
              <span>{t("choices.minute")}</span>
            </div>
          </div>
        )}
        {byIdData?.status === 1 ? (
          <button
            className="singleCardContainer-active"
            onClick={() => navigate("/registration/signin")}
          >
            {t("choices.participatee")}
          </button>
        ) : (
          <button className="singleCardContainer-ended">
            {t("choices.projectEnded")}
          </button>
        )}
        <div className="singleCardContainer-calEye">
          <div>
            <img src={calendarSvg} alt="cal" />
            <span>12.02.2023</span>
          </div>
          <div>
            <img src={eyeSvg} alt="eye" />
            <span>100 k</span>
          </div>
        </div>

        <div className="singleCardContainer-hl"></div>
        <p>
          {byIdData?.description?.replace(
            /(<([^>]+)>+)|(&([a-zA-Z]+);+)/gi,
            ""
          )}
        </p>
        <div className="singleCardContainer-socialsCont">
          <a>
            <img src={square} alt="square" />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <img src={twitter} alt="twiitter" />
          </a>
          <a>
            <img src={telegram} alt="telegram" />
          </a>
          <p> {t("choices.shareFriends")}</p>
        </div>
      </div>
    </>
  );
};

export default MoreDetail;
