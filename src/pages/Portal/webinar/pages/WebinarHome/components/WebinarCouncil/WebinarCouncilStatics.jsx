import { useTranslation } from "react-i18next";
import { UserIcon, Globe } from "../../../../../../../assets/images/expert";
import { getMeetingCount } from "../../../../../../../reduxToolkit/portalSlices/meetingSlice/extraReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../../../../../../../component";
import "../../WebinarHome.scss";

const data = [
  {
    id: 1,
    country: "Rossiya",
    number: 0,
  },
  {
    id: 2,
    country: "Turkiya",
    number: 0,
  },
  {
    id: 3,
    country: "Germaniya",
    number: 0,
  },
  {
    id: 4,
    country: "Rossiya",
    number: 0,
  },
  {
    id: 5,
    country: "Malayziya",
    number: 0,
  },
  {
    id: 6,
    country: "Rossiya",
    number: 0,
  },
];

function WebinarCouncilStatics() {
  const { t } = useTranslation();

  const meetingsCount = useSelector(
    (store) => store.meetingSlice.meetingsCount
  );
  const meetingsCountLoading = useSelector(
    (store) => store.meetingSlice.meetingsCountLoading
  );
  const meetingError = useSelector((store) => store.meetingSlice.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeetingCount());
  }, []);

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
            <h5>O'tkazilgan tadbirlar soni</h5>
            <img src={UserIcon} alt="error" />
          </span>
          <h4>{meetingsCount}</h4>
          <p className="margin_bottom_60">Tadbirlar</p>
        </div>
        <div style={{ marginTop: "15px" }}>
          <span className="council--span">
            <h5>Jami tadbirlar qatnashganlar</h5>
            <img src={UserIcon} alt="error" />
          </span>
          <h4>0</h4>
          <p className="margin_bottom_60">Ishtirokchilari</p>
        </div>
        <div className="council-bottom">
          <span className="council--span">
            <h5>{t("expert.country")}</h5>
            <img src={Globe} alt="error" />
          </span>
          {data.map((data) => (
            <span className="council-span" key={data.id}>
              <h5>{data.country}</h5>
              <p>{data.number}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebinarCouncilStatics;
