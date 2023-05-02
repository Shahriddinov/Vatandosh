import { useTranslation } from "react-i18next";
import { ArrowIcon } from "../../../../../../../assets/images/expert";
import { data } from "../../data";
import "./ExpertCouncil.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css";
import { Navigation } from "swiper";
import { getExperts } from "../../../../../../../reduxToolkit/ExpertSlice/ExpertsSlice/ExpertSliceExtraReducer";
import Spinner from "../../../../../../../component/Spinner/Spinner";

function Expert() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { expertData, loading, error } = useSelector(
    (state) => state.expertSlice
  );
  console.log(expertData);

  const [isHiddenLeftBtn, setisHiddenLeftBtn] = useState(true);
  const [isHiddenRightBtn, setisHiddenRightBtn] = useState(false);

  const handleChange = (swiper) => {
    setisHiddenLeftBtn(swiper.isBeginning);
    setisHiddenRightBtn(swiper.isEnd);
  };

  useEffect(() => {
    dispatch(getExperts());
  }, [dispatch]);

  if (loading) {
    return <Spinner position="full" />;
  }

  if (error) return <p>{error}</p>;

  return (
    <div className="expert">
      <div className="container">
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
              0: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3.5,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 4.5,
                spaceBetween: 30,
              },
              1300: {
                slidesPerView: 4.5,
                spaceBetween: 30,
              },
            }}
            className="listwinners-list"
          >
            {data?.map((evt) => (
              <SwiperSlide key={evt.id}>
                <div className="expert-list-item">
                  <div className="expert-list-item-desc">
                    <img src={evt.images} alt="error" />
                    <p>{evt.country}</p>
                    <h3>{evt.name}</h3>
                    <h4>{evt.job}</h4>
                  </div>
                  <Link
                    className="employe-link"
                    to="/portal-category/expert/profile/12"
                  >
                    <span>{t("expert.detail")}</span>
                    <img src={ArrowIcon} alt="Arrow Icon" />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default Expert;
