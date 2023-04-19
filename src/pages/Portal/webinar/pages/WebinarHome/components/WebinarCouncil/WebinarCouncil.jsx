import { useTranslation } from "react-i18next";
import "./WebinarCouncil.scss";
import WebinarCouncilStatics from "./WebinarCouncilStatics";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { LazySpinner } from "../../../../../../../component";

function WebinarCouncil({ councilData }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { t } = useTranslation();
  return (
    <div className="council">
      <div className="container" ref={ref}>
        {inView ? (
          <>
            <div className="council-left">
              <img src={councilData?.image} alt="img" />
              <h3>{councilData?.title}</h3>
              <p>{councilData?.desc}</p>
              <div>
                <Link to={councilData.pathUrl}>{t("expert.detail")}</Link>
              </div>
            </div>
            <WebinarCouncilStatics />
          </>
        ) : (
          <LazySpinner height="350px" />
        )}
      </div>
    </div>
  );
}
export default WebinarCouncil;
