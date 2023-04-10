import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import img from "../../../../../assets/images/portal/2.png";
import "./ListWinners.scss";
import "swiper/css";
import { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { useState } from "react";

export default function ListWinners() {
  const [isHiddenLeftBtn, setisHiddenLeftBtn] = useState(true);
  const [isHiddenRightBtn, setisHiddenRightBtn] = useState(false);

  const handleChange = (swiper) => {
    setisHiddenLeftBtn(swiper.isBeginning);
    setisHiddenRightBtn(swiper.isEnd);
    console.log(swiper.isBeginning);
    console.log(swiper.isEnd);
  };

  return (
    <div className="listwinners">
      <div className="container">
        <h3>G‘oliblar ro‘yxati</h3>
        <button
          className="listwinners-list-leftbtn slider_controls__left"
          style={isHiddenLeftBtn ? { display: "none" } : null}
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          className="listwinners-list-rightbtn slider_controls__right"
          style={isHiddenRightBtn ? { display: "none" } : null}
        >
          <MdKeyboardArrowRight />
        </button>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Navigation]}
          onSlideChange={handleChange}
          navigation={{
            prevEl: ".slider_controls__left",
            nextEl: ".slider_controls__right",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 3.5,
              spaceBetween: 18,
            },
            1300: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
          className="listwinners-list"
        >
          {[1, 2, 3, 4, 5, 6].map((el) => (
            <SwiperSlide key={el} className="listwinners-list-item">
              <img src={img} alt="error" />
              <div className="listwinners-list-item-desc">
                <span> "ZIYOUZ VIKTORINASI" 1-o‘rin g‘olibi</span>
                <h4>Xayitboev Nurali</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised...
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
