import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

//Carusle components
import { Swiper, SwiperSlide } from "swiper/react";

//Scss files
import "./communityAssociationCompanyOffer.scss";
import { baseServerUrl } from "../../../../../../../services/api/utils";
import { useInView } from "react-intersection-observer";
import { LazySpinner } from "../../../../../../../component";

const CommunityAssociationCompanyOffer = (props) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const images = JSON.parse(props.images)?.map((el, i) => ({
    id: i + 1,
    image: el,
  }));

  const lng = useSelector((state) => state.language.language);
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState({
    id: images ? images[0].id : 1,
    image: images ? images[0].image : null,
  });

  return (
    <section className="community-association-company-offer">
      <div
        className="community-association-company-offer__container container"
        ref={ref}
      >
        {inView ? (
          <div className="community-association-company-offer__inner">
            <div className="community-association-company-offer__inner_top">
              <div className="community-association-company-offer__box_img">
                <img
                  className="community-association-company-offer__img"
                  src={`${baseServerUrl}/${activeImage.image}`}
                  alt={props[`title_${lng}`]}
                />
              </div>

              <div className="community-association-company-offer__content">
                <h2 className="community-association-company-offer__title">
                  {props[`info_title_${lng}`]}
                </h2>

                <p
                  className="community-association-company-offer__text1"
                  dangerouslySetInnerHTML={{
                    __html: props[`info_${lng}`],
                  }}
                />

                <b className="community-association-company-offer__workers">
                  {t("staffCount")} {props.company_workers}+
                </b>
              </div>
            </div>

            <div className="community-association-company-offer__inner_bottom">
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
                className="community-association-company-offer__inner_list"
              >
                {images?.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="community-association-company-offer__inner_item community-association-company-offer__inner_card "
                  >
                    <div
                      className={`community-association-company-offer__inner_card_img ${
                        item.id === activeImage.id ? "active" : ""
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
                        className="community-association-company-offer__inner_img"
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

export default CommunityAssociationCompanyOffer;
