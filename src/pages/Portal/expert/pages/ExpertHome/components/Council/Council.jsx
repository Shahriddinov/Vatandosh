import "./Council.scss";
import { Link } from "react-router-dom";
import CouncilStatics from "./CouncilStatics";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import Spinner from "../../../../../../../component/Spinner/Spinner";
import LazySpinner from "../../../../../../../component/lazySpinner/LazySpinner";

function Council({ councilData, expertCount, expertData }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { t } = useTranslation();
  return (
    <div className="expert-council">
      <div className="container expert-council-container" ref={ref}>
        {inView ? (
          <>
            <div className="expert-council-left">
              <img src={councilData?.image} alt="img" />
              <h3>{councilData?.title}</h3>
              <p>{councilData?.desc}</p>
              <div>
                <Link to={councilData.pathUrl}>{t("expert.detail")}</Link>
              </div>
            </div>
            <CouncilStatics expertCount={expertCount} expertData={expertData} />
          </>
        ) : (
          <LazySpinner height="350px" />
        )}
      </div>
    </div>
  );
}
export default Council;
