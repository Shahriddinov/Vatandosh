import { useState, memo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { CommunitySliderData } from "../../data";

//Carusle components
import { Swiper, SwiperSlide } from "swiper/react";

//Scss files
import "./communityAssociationCompanyOffer.scss";

const CommunityAssociationCompanyOffer = (props) => {
  const lng = useSelector((state) => state.language.language);
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState({
    id: CommunitySliderData[0].id,
    image: CommunitySliderData[0].image,
  });

  return (
    <section className="community-association-company-offer">
      <div className="community-association-company-offer__container container">
        <div className="community-association-company-offer__inner">
          <div className="community-association-company-offer__inner_top">
            <div className="community-association-company-offer__box_img">
              <img
                className="community-association-company-offer__img"
                src={activeImage.image}
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
              {CommunitySliderData.map((item) => (
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
                      src={item.image}
                      alt="img"
                      className="community-association-company-offer__inner_img"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityAssociationCompanyOffer;
