import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { CommunityCouncilStatics } from "../../../associationAbout/components";
import { LazySpinner } from "../../../../../../../component";
import DOMPurify from "dompurify";

import "./communityHomeCouncil.scss";

const CommunityHomeCouncil = ({ councilData }) => {
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
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(councilData.body),
                  }}
                />
                <div className="community-home-council__left_btn">
                  <Link to={councilData.pathUrl}>{t("expert.detail")}</Link>
                </div>
              </div>
              <CommunityCouncilStatics />
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
