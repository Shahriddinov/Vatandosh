import "./ExpertOffers.scss";
import DefaultProfilePic from "../../../../../assets/images/mediateka/2.png";
import { Link } from "react-router-dom";
import { BsArrowDownCircleFill } from "react-icons/bs";
import ExpertTitle from "../../components/ExpertTitle/ExpertTitle";
import ExpertProfileInfo from "./components/ExpertProfileInfo";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperts } from "../../../../../reduxToolkit/ExpertSlice/ExpertsSlice/ExpertSliceExtraReducer";
import { Spinner } from "../../../../../component";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { useState } from "react";

export default function ExpertOffers() {
  const [page, SetPage] = useState(1);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const url = [
    { title: t("expert.main"), url: "/portal-category/expert" },
    { title: t("expert.offers"), url: "/portal-category/expert/offers" },
  ];

  const { expertData, loading } = useSelector((state) => state.expertSlice);

  useEffect(() => {
    dispatch(getExperts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getExperts(page));
  }, [page, dispatch]);

  console.log(expertData);

  return (
    <main className="expertoffer">
      {loading ? <Spinner position={"full"} /> : null}
      <div className="container">
        <ExpertTitle title={t("expert.offers")} url={url} />
        <div className="expertoffer-list">
          {expertData?.data?.length
            ? expertData.data.map((el) => (
                <div className="expertoffer-list-item" key={el.id}>
                  <img src={DefaultProfilePic} alt="error" />
                  <div className="expertoffer-list-item-desc">
                    <ExpertProfileInfo
                      profileImg={`${PORTAL_IMAGE_URL}/${el?.user_profile?.avatar_url}`}
                      name={
                        el?.user_profile?.last_name &&
                        el?.user_profile?.first_name &&
                        el?.user_profile?.second_name
                      }
                      address={el?.user_profile?.international_address}
                      position={el?.user_profile?.job_position}
                    />
                    <p>{el?.suggestions}</p>
                    <div className="expertoffer-list-item-desc-button">
                      <button>
                        <Link to={"/portal-category/expert/offers/" + el?.id}>
                          {t("expert.detail")}
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : null}
          <div className="expertoffer-list-morebtn">
            {expertData?.total - 12 * page > 0 ? (
              <button
                onClick={() => {
                  SetPage((prev) => ++prev);
                }}>
                <BsArrowDownCircleFill />
                <span>{t("expert.alloffers")}</span>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
