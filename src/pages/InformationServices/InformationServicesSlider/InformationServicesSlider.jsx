import React, { useEffect, useState } from "react";
import "./InformationServicesSlider.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsFillCalendarMinusFill } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";
import { PORTAL_IMAGE_URL } from "../../../services/api/utils";
import { useSelector } from "react-redux";

import { getDate } from "../../../config/constants";
import { useLocation } from "react-router-dom";

export const InformationServicesSlider = ({ data }) => {
  const [img, setImg] = useState(0);
  const { pathname } = useLocation();

  const lan = useSelector((state) => state.language.language);

  const handleRight = () => {
    if (img === data.length - 1) setImg((prev) => (prev = 0));
    else setImg((prev) => ++prev);
  };

  const handleLeft = () => {
    if (img === 0) setImg((prev) => (prev = data.length - 1));
    else setImg((prev) => --prev);
  };

  let slideInterval;

  const autoPlay = () => {
    slideInterval = setInterval(handleRight, 8000);
  };

  useEffect(() => {
    autoPlay();
    return () => clearInterval(slideInterval);
  }, [img]);

  const imageType = pathname.split("/")[2] === "community-association";

  return (
    <div className="main-hero">
      {data?.map((card, i) => (
        <React.Fragment key={card.id}>
          <div
            className={`main-hero-slider ${i === img ? "active" : ""}`}
            key={card.id}
            style={{
              backgroundImage: `url(${PORTAL_IMAGE_URL}/${
                imageType ? JSON.parse(card?.image)[0] : card?.image
              })`,
              backgroundPosition: "center center",
            }}
          />
          <div
            className={`main-hero-slider-bottom ${i === img ? "active" : ""}`}
          >
            <div className="main-hero-slider-bottom-title">
              <h2>{card.title}</h2>
              <div className={`navigation-line ${i === img ? "active" : ""}`} />
            </div>
            <div className="main-hero-slider-bottom-calendar">
              <div className="main-hero-slider-bottom-calendarLeft">
                <span>
                  <BsFillCalendarMinusFill />
                </span>
                <p>
                  <span>
                    {getDate(card.created_at).getDay().length > 2
                      ? getDate(card.created_at).getDay()
                      : `0${getDate(card.created_at).getDay()}`}
                  </span>
                  .
                  <span>
                    {getDate(card.created_at).getMonth().length > 2
                      ? getDate(card.created_at).getMonth()
                      : `0${getDate(card.created_at).getMonth()}`}
                  </span>
                  .<span>{getDate(card.created_at).getFullYear()}</span>
                </p>
              </div>
              <div className="main-hero-slider-bottom-calendarRight">
                <button aria-label="prev" onClick={handleLeft}>
                  <AiOutlineLeft size={18} />{" "}
                </button>
                <button aria-label="next" onClick={handleRight}>
                  <AiOutlineRight size={18} />{" "}
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
      <div className="main-hero-dot">
        <TbPointFilled size={20} className={img === 0 ? "activeDot" : ""} />
        <TbPointFilled size={20} className={img === 1 ? "activeDot" : ""} />
        <TbPointFilled size={20} className={img === 2 ? "activeDot" : ""} />
      </div>
    </div>
  );
};
