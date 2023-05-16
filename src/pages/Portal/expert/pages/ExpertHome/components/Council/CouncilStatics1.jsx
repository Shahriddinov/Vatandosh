import { useTranslation } from "react-i18next";
import { UserIcon, Globe } from "../../../../../../../assets/images/expert";

const data = [
  {
    id: 1,
    country: "Rossiya",
    number: 24,
  },
  {
    id: 2,
    country: "Turkiya",
    number: 18,
  },
  {
    id: 3,
    country: "Germaniya",
    number: 16,
  },
  {
    id: 4,
    country: "Rossiya",
    number: 8,
  },
  {
    id: 5,
    country: "Malayziya",
    number: 4,
  },
  {
    id: 6,
    country: "Rossiya",
    number: 2,
  },
];

function CouncilStatics({ meetingOnedata }) {
  console.log(meetingOnedata);
  const { t } = useTranslation();
  return (
    <div className="council-right">
      <div>
        <span className="council--span">
          <h5>{t("expert.registered")}</h5>
          <img src={UserIcon} alt="error" />
        </span>
        <h4>{meetingOnedata.count}</h4>
        <p className="margin_bottom_60">{t("expert.expertsand")}</p>
      </div>
      <div className="council-bottom">
        <span className="council--span">
          <h5>{t("expert.country")}</h5>
          <img src={Globe} alt="error" />
        </span>
        {meetingOnedata.locations?.map((data) => (
          <span className="council-span" key={data.id}>
            <h5>{data.name}</h5>
            <p>{data.count}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default CouncilStatics;