import { useTranslation } from "react-i18next";
import WebinarCouncilStatics from "./WebinarCouncilStatics";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { LazySpinner } from "../../../../../../../component";
import { PORTAL_IMAGE_URL } from "../../../../../../../services/api/utils";

function WebinarCouncil({ councilData, meetingPage }) {
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
              <img src={`${PORTAL_IMAGE_URL}${meetingPage?.image}`} alt="img" />
              <h3>{meetingPage?.title}</h3>
              <p>{meetingPage?.body}</p>
              <div>
                <Link to={councilData.pathUrl}>{t("expert.detail")}</Link>
              </div>
            </div>
            <WebinarCouncilStatics
              count={meetingPage.end_count}
              attendees={meetingPage.members}
              locations={meetingPage.locations}
            />
          </>
        ) : (
          <LazySpinner height="350px" />
        )}
      </div>
    </div>
  );
}
export default WebinarCouncil;
