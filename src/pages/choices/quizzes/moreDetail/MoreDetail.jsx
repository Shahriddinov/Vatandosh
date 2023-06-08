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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  console.log(byIdData)

  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <img
            style={{
              width: "110px",
              height: "90px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
            src={`${PORTAL_IMAGE_URL}/${byIdData.image[i]}`}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />
      <div className="singleCardContainer">
        <h1>{byIdData.title}</h1>
        <Slider {...settings}>
          {byIdData?.image?.map((evt) => (
            <div>
              <img
                className="singleCardContainer__image"
                src={`${PORTAL_IMAGE_URL}/${evt}`}
              />
            </div>
          ))}
        </Slider>
        {byIdData?.status === 0 ? (
          <div className="singleCardContainer-timeOver">
            <p>{t("choices.quizIsOver")}</p>
          </div>
        ) : (
          <div className="singleCardContainer-timeCont">
            <div className="singleCardContainer-timeCont-inner">
              <span>{timeData?.days}</span>
              <span>{t("choices.day")}</span>
            </div>
            <div className="singleCardContainer-timeCont-vl"></div>
            <div className="singleCardContainer-timeCont-inner">
              <span>{timeData?.hours}</span>
              <span>{t("choices.hour")}</span>
            </div>
            <div className="singleCardContainer-timeCont-vl"></div>
            <div className="singleCardContainer-timeCont-inner">
              <span>{timeData?.minutes}</span>
              <span>{t("choices.minute")}</span>
            </div>
          </div>
        )}
        {byIdData?.status === 1 ? (
          <button
            className="singleCardContainer-active"
            onClick={() => navigate("/registration/signin")}>
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
        <iframe
            className="videosss"
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${byIdData?.video}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>

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
