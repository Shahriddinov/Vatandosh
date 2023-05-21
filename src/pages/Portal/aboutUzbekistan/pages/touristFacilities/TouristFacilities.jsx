import React from "react";
import "./touristFacilities.scss";

import FacilitiesCard from "../../components/facilitiesCard/FacilitiesCard";
import { useTouristFacilities } from "./hooks/useTouristFacilities";
import { MyButton, Spinner } from "../../../../../component";
import { useState } from "react";
import View3D from "../../components/view3D/View3D";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { getAllSightseeing } from "../../../../../reduxToolkit/portalSlices/aboutUzbekistanSlice/aboutUzbekistanSliceAsyncThunks";
import { paginationCount } from "../../../../../helpers/extraFunction";

const TouristFacilities = () => {
  const {
    error,
    allCitySightseeingLoading,
    allCitySightseeing,
    activeMenu,
    allCityLoading,
    allCity,
    dispatch,
  } = useTouristFacilities();
  const [activeCity, setActiveCity] = useState(1);
  const [activePage, setActivePage] = useState(1);

  if (allCityLoading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  }

  const handleClick = (id) => {
    setActiveCity(id);
    dispatch(getAllSightseeing({ paginate: 9, city: id }));
  };

  const moreData = () => {
    setActivePage((prev) => prev + 1);
    dispatch(
      getAllSightseeing({ paginate: (activePage + 1) * 9, city: activeCity })
    );
  };

  const countPagination = !allCitySightseeingLoading
    ? paginationCount(allCitySightseeing?.total, 9)
    : 0;

  return (
    <>
      <div className="facilities">
        <div className="container">
          <div
            className="facilities_hero"
            style={{
              backgroundImage: `url(${PORTAL_IMAGE_URL}${
                JSON.parse(activeMenu.image)[0]
              })`,
            }}
          >
            <h1>{activeMenu?.name}</h1>
          </div>
          {activeMenu?.page_menu_contents[0] ? (
            <div className="facilities_intro">
              <h1>{activeMenu?.page_menu_contents[0]?.title}</h1>
              <p>{activeMenu?.page_menu_contents[0]?.text}</p>
            </div>
          ) : null}
          <div className="facilities_grid">
            <h1>Туристические объекты</h1>
            <ul>
              {allCity?.map((item) => (
                <li
                  className={`${item.id === activeCity ? "active_li" : ""}`}
                  onClick={() => handleClick(item.id)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            {allCitySightseeing?.data.length ? (
              <div className="facilities_grid_cards">
                {allCitySightseeing?.data?.map((card) => (
                  <FacilitiesCard {...card} key={card.id} />
                ))}
              </div>
            ) : (
              <p>Hozirda bu shaharda turistik ob'ektlar mvjud emas </p>
            )}
            {allCitySightseeingLoading ? <Spinner /> : null}
          </div>
          {countPagination > 1 && activePage < countPagination ? (
            <div className="facilities_intro_btn">
              <MyButton onClick={moreData}>Ko'proq ko'rish</MyButton>
            </div>
          ) : null}
          <View3D />
          {activeMenu?.page_menu_contents[1] ? (
            <div className="facilities_intro">
              <h1>{activeMenu?.page_menu_contents[1]?.title}</h1>
              <p>{activeMenu?.page_menu_contents[1]?.text}</p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TouristFacilities;
