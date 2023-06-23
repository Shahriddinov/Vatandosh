import { useTranslation } from "react-i18next";
import { UserIcon, Globe } from "../../../../../../../assets/images/expert";
import { getMeetingCount } from "../../../../../../../reduxToolkit/portalSlices/meetingSlice/extraReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../../../../../../../component";
import "../../WebinarHome.scss";

function WebinarCouncilStatics({ count, locations, attendees }) {
  const { t } = useTranslation();

  const meetingsCountLoading = useSelector(
    (store) => store.meetingSlice.meetingsCountLoading
  );
  const meetingError = useSelector((store) => store.meetingSlice.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeetingCount());
  }, [dispatch]);

  if (meetingsCountLoading) {
    return <Spinner />;
  } else if (meetingError) {
    return <p>Error</p>;
  }

  return (
    <div>
      <div className="council-right">
        <div>
          <span className="council--span">
            <h5>{t("webinar.countofEvents")}</h5>
            <img src={UserIcon} alt="error" />
          </span>
          <h4>{count}</h4>
          <p className="margin_bottom_60">{t("webinar.nav2")}</p>
        </div>
        <div style={{ marginTop: "15px" }}>
          <span className="council--span">
            <h5>{t("webinar.totalOfEventsattendance")}</h5>
            <img src={UserIcon} alt="error" />
          </span>
          <h4>{attendees}</h4>
          <p className="margin_bottom_60">{t("webinar.participants")}</p>
        </div>
        <div className="council-bottom">
          <span className="council--span">
            <h5>{t("expert.country")}</h5>
            <img src={Globe} alt="error" />
          </span>
          {locations.map((location) => (
            <span className="council-span" key={location.id}>
              <h5>{location.name}</h5>
              <p>{location.count}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebinarCouncilStatics;
