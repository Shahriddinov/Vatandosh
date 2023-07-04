import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { CommunityCouncilStatics } from "../../../associationAbout/components";
import { LazySpinner } from "../../../../../../../component";
import "./communityHomeCouncil.scss";
import { extraFun } from "./extra";

const CommunityHomeCouncil = ({ councilData, allCommunityGet, allRegions }) => {
  const { imgSrc, imgAlt, filteredText } = extraFun(councilData.body);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { t } = useTranslation();

  return (
    <div className="community-home-council">
      <div className="container">
        <div className="community-home-council__inner" ref={ref}>
          {inView ? (
            <>
              <div className="community-home-council__left">
                <div
                  className="community-home-council__left_body"
                  dangerouslySetInnerHTML={{ __html: councilData.body }}
                />
                {/* <img src={imgSrc} alt={imgAlt} width={770} height={420} />
                <h3>{filteredText[0].replace(/&nbsp;/g, "")}</h3> */}
                {/* <p>
                  {filteredText[1].length > 180
                    ? filteredText[1].slice(0, 180) + "..."
                    : filteredText[1]}
                </p> */}
                <div className="community-home-council__left_btn">
                  <Link to={councilData.pathUrl}>{t("expert.detail")}</Link>
                </div>
              </div>
              <CommunityCouncilStatics
                allRegions={allRegions}
                allCommunityGet={allCommunityGet}
              />
            </>
          ) : (
            <LazySpinner height="350px" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityHomeCouncil;
