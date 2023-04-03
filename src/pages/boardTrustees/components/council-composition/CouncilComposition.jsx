import React from "react";
import "./councilComposition.scss";

import CouncilCard from "../council/CouncilCard";
import arrowDown from "../../../../assets/images/about/arrov-down.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CouncilComposition = ({ searchCount, handleFetching, trusts }) => {
  const { t } = useTranslation();
  console.log(trusts);
  return (
    <section className="council-composition">
      <div className="council-composition__container container">
        <div className="council-composition__inner">
          <h2 className="council-composition__title">
            {t("Council_composition")}
          </h2>

          <ul className="council-composition__list">
            {trusts[0]?.data?.map((el) => (
              <li className="council-composition__item" key={el.id}>
                <CouncilCard trusts={el} />
              </li>
            ))}
          </ul>
          {trusts[0]?.next_page_url ? (
            <Link
              className="council-composition__btn"
              to={`/about/council-trustees?next=${
                searchCount.login + "&" + (searchCount.id * 1 + 1)
              }`}
              onClick={handleFetching}
            >
              <img src={arrowDown} alt="" />
              <span className="council-composition__btn--span">
                {t("seeMore")}
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default CouncilComposition;
