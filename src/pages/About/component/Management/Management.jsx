import React, { useEffect } from "react";
import "./Management.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrustees } from "../../../../reduxToolkit/trusteesSlice/trusteesAsyncThunk";
import WhriteHeader from "../../../../component/Layout/WhriteHeader/WhriteHeader";
import CouncilHero from "../../../boardTrustees/components/council-hero/CouncilHero";
import CouncilCard from "../../../boardTrustees/components/council/CouncilCard";
import arrowDown from "../../../../assets/images/about/arrov-down.svg";
import Personal from "./component/Personal/Personal";
import { useTranslation } from "react-i18next";

function Management(props) {
  const dispatch = useDispatch();
  const allTrustees = useSelector((state) => state.trustees.allTrustees);
  const { t } = useTranslation();
  const heroData = {
    title: `${t("about_items.item3")}`,
    description: `${t("aboutPage.section1.ptext")}`,
    pagePath: `${t("more")}`,
  };
  useEffect(() => {
    dispatch(getAllTrustees());
  }, []);
  return (
    <div className="management">
      <div className="page-about">
        <WhriteHeader />
        <CouncilHero {...heroData} />
      </div>
      <section className="management">
        <div className="management__container container">
          <div className="management__inner">
            <h2 className="management__title">{t("leadership_structure")}</h2>

            <ul className="management__list">
              {allTrustees?.map((el) => (
                <li className="management__item" key={el.id}>
                  <Personal trustee={el} />
                </li>
              ))}
            </ul>

            <button className="management__btn">
              <img src={arrowDown} alt="" />
              <span className="council-composition__btn--span">
                {t("seeMore")}
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Management;
