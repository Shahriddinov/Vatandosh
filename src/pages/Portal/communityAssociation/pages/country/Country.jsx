import React from "react";
import "./country.scss";
import { PageTop } from "../../components";
import { ArrowRight } from "../../../../../assets/images/communityAssociation";
import { MiniSlider } from "../../../../../component/miniSlider/MiniSlider";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../../../reduxToolkit/newsSlice/extraReducer";
import { countryData as data } from "./data";
import { Spinner } from "../../../../../component";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.newsSlice.newsData);
  const loadingNews = useSelector((state) => state.newsSlice.loadingNews);
  const { country } = useParams();

  useEffect(() => {
    if (!news.length) {
      dispatch(getNews());
    }
  }, []);

  const pageTopData = {
    title: "Qirgʻiziston",
    pathUrl: [
      {
        id: 1,
        pathUrl: "/portal-category/community-association",
        label: t("communityAssociation.navbar.navbar_link1"),
        active: false,
      },
      {
        id: 2,
        pathUrl: null,
        label: "Qirgʻiziston",
        active: true,
      },
    ],
  };

  if (loadingNews) {
    return <Spinner position="full" />;
  }

  return (
    <div className="community-association-country">
      <div className="community-association-country__container container">
        <div className="community-association-country__inner">
          <PageTop pageTopData={pageTopData} />

          <ul className="community-association-country__list">
            {data.map((item) => (
              <li className="community-association-country__item" key={item.id}>
                <span className="community-association-country__item--text">
                  {item.id}.{" "}
                  {item.text
                    .split(" ")
                    .slice(0, item.text.split(" ").length - 1)
                    .join(" ")}
                  <Link
                    className="associations__accordion_item--link"
                    to={`/portal-category/community-association/country/${country}/${item?.id}`}
                  >
                    {" "}
                    {item.text.split(" ")[item.text.split(" ").length - 1]}
                  </Link>
                </span>
                <img
                  className="community-association-country__icon"
                  src={ArrowRight}
                  alt="Arrow right"
                />
              </li>
            ))}
          </ul>

          <MiniSlider title={`${t("news")}`} data={news} fetchUrl="events" />
        </div>
      </div>
    </div>
  );
};

export default Country;
