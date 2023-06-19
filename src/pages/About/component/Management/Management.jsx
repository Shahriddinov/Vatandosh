import React, { useEffect } from "react";
import "./Management.scss";
import { useDispatch, useSelector } from "react-redux";
import WhriteHeader from "../../../../component/Layout/WhriteHeader/WhriteHeader";
import CouncilHero from "../../../boardTrustees/components/council-hero/CouncilHero";
import Personal from "./component/Personal/Personal";
import { useTranslation } from "react-i18next";
import { getManagement } from "../../../../reduxToolkit/ManagementSlice/ManagementSlice";
import Spinner from "../../../../component/Spinner";

function Management(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.managementSlice.loading);

  const ManagementData = useSelector(
    (state) => state.managementSlice.managementData
  );
  const { t } = useTranslation();
  const heroData = {
    title: `${t("about_items.item3")}`,
    // description: `${t("aboutPage.section1.ptext")}`,
    pagePath: `${t("more")}`,
  };
  useEffect(() => {
    dispatch(getManagement());
  }, [dispatch]);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="management">
      <div className="page-about">
        <WhriteHeader />
        <CouncilHero {...heroData} />
      </div>
      <section className="management">
        <div className="management__container container">
          <div className="management__inner">
            <ul className="management__list">
              {ManagementData?.map((el) => (
                <li className="management__item" key={el.id}>
                  <Personal management={el} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Management;
