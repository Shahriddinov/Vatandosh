import { useTranslation } from "react-i18next";
import { ArrowIcon } from "../../../../../../../assets/images/expert";
import "./ExpertCouncil.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css";
import { Navigation } from "swiper";
import Spinner from "../../../../../../../component/Spinner/Spinner";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

function Expert({ expertData, loading }) {
  const { t } = useTranslation();

  const [isHiddenLeftBtn, setisHiddenLeftBtn] = useState(true);
  const [isHiddenRightBtn, setisHiddenRightBtn] = useState(false);

  const handleChange = (swiper) => {
    setisHiddenLeftBtn(swiper.isBeginning);
    setisHiddenRightBtn(swiper.isEnd);
  };

  if (loading) {
    return <Spinner position="full" />;
  }

  return expertData?.data?.length ? (
    <div className="expert">
      <div className="container expert-container">
        <h2>{t("expert.expertCouncil")}</h2>
        <div className="expert-list">
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
              375: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="listwinners-list"
          >
            {expertData?.data?.map((evt) => {
              console.log(evt);

              return (
                <SwiperSlide key={evt.id}>
                  <div className="expert-list-item">
                    <div className="expert-list-item-desc">
                      <img
                        alt="error"
                        src={`${PORTAL_IMAGE_URL}${
                          evt?.user_profile?.avatar_url
                            ? evt?.user_profile?.avatar_url
                            : evt?.user?.avatar
                        }`}
                        className="expert-list-item-img"
                      />
                      <p>
                        {evt?.user_profile?.international_location_id?.name}{" "}
                        {"   "}
                        {evt?.user_profile?.international_address_id?.name}
                      </p>
                      <h3>
                        {evt?.user_profile?.last_name}{" "}
                        {evt?.user_profile?.first_name}{" "}
                        {evt?.user_profile?.second_name}
                      </h3>
                      <h4>
                        {evt?.user_education[0]?.specialization_id?.title}
                      </h4>
                    </div>
                    <Link
                      className="employe-link"
                      to={`/portal-category/expert/profile/${evt.id}`}
                    >
                      <span>{t("expert.detail")}</span>
                      <img src={ArrowIcon} alt="Arrow Icon" />
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  ) : null;
}
export default Expert;
