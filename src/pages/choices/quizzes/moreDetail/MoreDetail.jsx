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
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

const MoreDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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

  console.log(byIdData);

  return (
    <>
      <Header />
      <div className="singleCardContainer">
        <h1>{byIdData.title}</h1>
        {/* <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2">
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper">
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>
        </Swiper> */}
        <img src={`${PORTAL_IMAGE_URL}${byIdData.image}`} alt="rasm" />
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

        <video controls>
          {byIdData?.video &&
          JSON.parse(byIdData.video || "[]")[0]?.download_link ? (
            <source
              src={`${PORTAL_IMAGE_URL}/${
                JSON.parse(byIdData.video)[0].download_link
              }`}
              type="video/ogg"
            />
          ) : (
            <source type="video/mp4" src="fallback-video.mp4" />
          )}
        </video>

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
