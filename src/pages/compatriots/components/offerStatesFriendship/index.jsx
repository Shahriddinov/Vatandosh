import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { baseServerUrl } from "../../../../services/api/utils";
import { LazySpinner } from "../../../../component";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";

//Carusle components
import { Swiper, SwiperSlide } from "swiper/react";

//Scss files
import "./offerStatesFriendship.scss";

const OfferStatesFriendship = (props) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const lng = useSelector((state) => state.language.language);
  const { t } = useTranslation();

  const images = JSON.parse(props?.images)?.map((el, i) => ({
    id: i + 1,
    image: el,
  }));

  const [activeImage, setActiveImage] = useState({
    id: images ? images[0]?.id : 1,
    image: images ? images[0]?.image : null,
  });

  return (
    <section className="offer-state-friendship">
      <div className="offer-state-friendship__container container" ref={ref}>
        {inView ? (
          <div className="offer-state-friendship__inner">
            <div className="offer-state-friendship__inner_top">
              <div className="offer-state-friendship__box_img">
                <img
                  className="offer-state-friendship__img"
                  src={`${baseServerUrl}/${activeImage?.image}`}
                  alt={props.name}
                />
              </div>

              <div className="offer-state-friendship__content">
                <h2 className="offer-state-friendship__title">
                  {props[`info_title_${lng}`]}
                </h2>

                <p
                  className="offer-state-friendship__text1"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(props[`info_${lng}`]),
                  }}
                />

                <b className="offer-state-friendship__workers">
                  {t("staffCount")} {props.company_workers}+
                </b>
              </div>
            </div>

            <div className="offer-state-friendship__inner_bottom">
              <Swiper
                slidesPerView={8}
                spaceBetween={20}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  400: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  600: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  730: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                  850: {
                    slidesPerView: 6,
                    spaceBetween: 18,
                  },
                  1060: {
                    slidesPerView: 7,
                    spaceBetween: 20,
                  },
                  1150: {
                    slidesPerView: 8,
                    spaceBetween: 20,
                  },
                }}
                className="offer-state-friendship__inner_list"
              >
                {images?.map((item, i) => (
                  <SwiperSlide
                    key={item.id}
                    className="offer-state-friendship__inner_item offer-state-friendship__inner_card "
                  >
                    <div
                      className={`offer-state-friendship__inner_card_img ${
                        i + 1 === activeImage.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setActiveImage((prev) => ({
                          ...prev,
                          id: item.id,
                          image: item.image,
                        }))
                      }
                    >
                      <img
                        src={`${baseServerUrl}/${item.image}`}
                        alt="img"
                        className="offer-state-friendship__inner_img"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ) : (
          <LazySpinner height="200px" />
        )}
      </div>
    </section>
  );
};

export default OfferStatesFriendship;
