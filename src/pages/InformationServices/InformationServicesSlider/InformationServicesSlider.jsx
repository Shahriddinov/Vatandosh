import React, { useEffect, useState } from "react";
import "./InformationServicesSlider.scss";
import data from "../mock";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsFillCalendarMinusFill } from "react-icons/bs";

export const InformationServicesSlider = () => {
  const [img, setImg] = useState(1);

  const handleRight = () => {
    if (img === 3) setImg((prev) => prev = 1);
    else setImg((prev) => ++prev);
  };

  const handleLeft = () => {
    if (img === 1) setImg((prev) => (prev = 3));
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

  return (
    <div className="main-hero">
      {data.map((card) => (
        <>
          <div
            className={`main-hero-slider ${card.id === img ? "active" : ""}`}
            key={card.id}
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundPosition: "center center",
            }}
          />
          <div className={`main-hero-slider-bottom ${card.id === img ? "active" : ""}`}>
            <div className="main-hero-slider-bottom-title">
              <h2>{card.title}</h2>
              <div
                className={`navigation-line ${card.id === img ? "active" : ""}`}
              />
            </div>
            <div className="main-hero-slider-bottom-calendar">
              <div className="main-hero-slider-bottom-calendarLeft">
                <span>
                  <BsFillCalendarMinusFill />
                </span>
                <p>{card.data}</p>
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

        </>
      ))}
    </div>
  );
};
