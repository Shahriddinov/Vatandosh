import React from "react";
import "./country.scss";
import { PageTop } from "../../components";
import { ArrowRight } from "../../../../../assets/images/communityAssociation";
import { useTranslation } from "react-i18next";
import { Spinner } from "../../../../../component";
import { Link } from "react-router-dom";
import { useCountryGet } from "./hooks/useCountryGet";
import { PortalMiniSlider } from "../../../components/portalMiniSlider/PortalMiniSlider";

const Country = () => {
  const { t } = useTranslation();

  const {
    allCommunityGet,
    allCommunityGetLoading,
    allRegionsGetLoading,
    allRegionsGet,
    communityCountry,
    loadingNews,
    news,
  } = useCountryGet();

  if (loadingNews || allCommunityGetLoading || allRegionsGetLoading) {
    return <Spinner position="full" />;
  }
  const findCountryCountry = allRegionsGet.filter(
    (el) => el.id === communityCountry * 1
  );

  const pageTopData = {
    title: findCountryCountry.name,
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
        label: findCountryCountry[0].name,
        active: true,
      },
    ],
  };

  console.log(allCommunityGet?.data[0].name.trim().split(" "));

  return (
    <div className="community-association-country">
      <div className="community-association-country__container container">
        <div className="community-association-country__inner">
          <PageTop pageTopData={pageTopData} />

          <ul className="community-association-country__list">
            {allCommunityGet?.data?.map((item, i) => (
              <li className="community-association-country__item" key={item.id}>
                <span className="community-association-country__item--text">
                  {i + 1}.{" "}
                  {item?.name
                    .trim()
                    ?.split(" ")
                    .slice(0, item?.name?.trim().split(" ").length - 1)
                    .join(" ")}
                  <Link
                    className="associations__accordion_item--link"
                    to={`/portal-category/community-association/country/${communityCountry}/${item?.id}`}
                  >
                    {" "}
                    {
                      item?.name?.trim().split(" ")[
                        item?.name?.trim().split(" ").length - 1
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

          <PortalMiniSlider
            title={`${t("news")}`}
            data={news?.data}
            fetchUrl="portal-category/community-association/news"
          />
        </div>
      </div>
    </div>
  );
};

export default Country;
