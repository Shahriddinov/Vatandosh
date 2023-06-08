import "./PublicAssociations.scss";
import { Link } from "react-router-dom";

import btnArrowDown from "../../../assets/images/portal/privateInformation/btnArrowDown.svg";
import badCrumbsImg from "../../../assets/images/portal/privateInformation/badCrumbs.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../../../component/Layout/Header/Header";
import { Spinner } from "../../../component";
import PublicAssCard from "./components/PublicAssCard";
import { useTranslation } from "react-i18next";
import { usePublicAssData } from "./hooks/usePublicAssData";

const PublicAssociations = () => {
  const [postsPerPage, setPostsPerpage] = useState(6);
  const { t } = useTranslation();

  const {
    publicAssloading,
    publicAssdata,
    publicAsserror,
    countriesLoading,
    countriesData,
    countriesError,
  } = usePublicAssData();

  if (publicAssloading || countriesLoading) {
    return <Spinner position="full" />;
  } else if (publicAsserror || countriesError) {
    return (
      <p>
        {publicAsserror}
        {countriesError}
      </p>
    );
  }

  return (
    <>
      <Header />
      <div className="choicesPAContainer">
        <div className="choicesPAContainer-header">
          <h1>{t("choices.publicAss")}</h1>
          <ul>
            <li>
              <Link to="/">{t("choices.mainPage")}</Link>
              <img src={badCrumbsImg} alt="breadcrumb line" />
            </li>
            <li aria-current="page">{t("choices.publicAss")}</li>
          </ul>
        </div>
        <div className="choicesPAContainer-body">
          {publicAssdata?.data?.map((el, index) => (
            <PublicAssCard key={index} data={el} allRegions={countriesData} />
          ))}
        </div>
        <div className="choicesPAContainer-btnCont">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setPostsPerpage((prev) => prev + 6)}
          >
            <img src={btnArrowDown} alt="icon" />
            <span>{t("choices.all")}</span>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default PublicAssociations;
