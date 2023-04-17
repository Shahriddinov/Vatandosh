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
import { useCountryGet } from "./hooks/useCountryGet";

const Country = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.newsSlice.newsData);
  const loadingNews = useSelector((state) => state.newsSlice.loadingNews);
  const { communityCountry } = useParams();
  const {
    associationData,
    associationCategoryData,
    associationLoading,
    associationCategoryLoading,
  } = useCountryGet();
  const lng = useSelector((state) => state.language.language);

  useEffect(() => {
    if (!news.length) {
      dispatch(getNews());
    }
  }, []);

  if (loadingNews || associationLoading || associationCategoryLoading) {
    return <Spinner position="full" />;
  }

  const findCountry = associationData.find((el) => el.id === 3);
  const findCountryCategoryData = associationCategoryData.filter(
    (el) => el.country_uz * 1 === 3
  );

  console.log(findCountry);

  const pageTopData = {
    title: findCountry[`country_${lng}`],
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
        label: findCountry[`country_${lng}`],
        active: true,
      },
    ],
  };

  return (
    <div className="community-association-country">
      <div className="community-association-country__container container">
        <div className="community-association-country__inner">
          <PageTop pageTopData={pageTopData} />

          <ul className="community-association-country__list">
            {findCountryCategoryData.map((item, i) => (
              <li className="community-association-country__item" key={item.id}>
                <span className="community-association-country__item--text">
                  {i + 1}.{" "}
                  {item[`title_${lng}`]
                    .split(" ")
                    .slice(0, item[`title_${lng}`].split(" ").length - 1)
                    .join(" ")}
                  <Link
                    className="associations__accordion_item--link"
                    to={`/portal-category/community-association/country/${communityCountry}/${item?.id}`}
                  >
                    {" "}
                    {
                      item[`title_${lng}`].split(" ")[
                        item[`title_${lng}`].split(" ").length - 1
                      ]
                    }
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
