import "./Presentation.scss";
import "swiper/css";
import { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import img from "../../../../../../../assets/images/portal/4.png";
import im1 from "../../../../../../../assets/images/portal/1.png";
import im2 from "../../../../../../../assets/images/portal/2.png";
import im3 from "../../../../../../../assets/images/portal/3.png";
import im5 from "../../../../../../../assets/images/portal/5.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

export default function Presentation({ activeNav }) {
  const [activeImg, setactiveImg] = useState(img);
  const [activeSlide, setactiveSlide] = useState(0);

  return (
    <div
      className={
        activeNav === 1
          ? "presentation passTheTest-scaleActive"
          : "presentation passTheTest-scaleHidden"
      }
    >
      <div className="presentation-gallery">
        <img src={activeImg} alt="error" />
        <ul className="presentation-gallery-list">
          {[im1, im2, im3, im5].map((img, index) => (
            <li key={index} onClick={() => setactiveImg(img)}>
              <img src={img} alt="error" />
            </li>
          ))}
        </ul>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".pagination-left",
          nextEl: ".pagination-right",
        }}
        onSlideChange={(e) => {
          console.log(e.activeIndex);
          setactiveSlide(e.activeIndex);
        }}
        className="presentation-swiper"
      >
        {[1, 2, 3, 4, 5, 6, 7].map((el, index) => (
          <SwiperSlide key={index}>
            <div className="presentation-desc">
              <div className="presentation-desc-main">
                <div className="presentation-desc-main-wrapper">
                  <h2>Об этом курсе</h2>
                  <p>
                    В этом курсе вы примете участие в серии задач, призванных
                    повысить ваше собственное счастье и выработать более
                    продуктивные привычки. В качестве подготовки к этим заданиям
                    профессор Лори Сантос раскрывает неправильные представления
                    о счастье, раздражающие особенности ума, которые заставляют
                    нас думать так, как мы думаем, и исследования, которые могут
                    помочь нам измениться. В конечном итоге вы будете готовы к
                    тому, чтобы успешно включить в свою жизнь определенную
                    оздоровительную деятельность.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="presentation-desc-pagination">
        <div className="presentation-desc-pagination-num">
          0{activeSlide + 1}/07
        </div>
        <div className="presentation-desc-pagination-btns">
          <button className="presentation-desc-pagination-btns-item pagination-left">
            <MdKeyboardArrowLeft />
          </button>
          <button className="presentation-desc-pagination-btns-item pagination-right">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
