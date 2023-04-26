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

function WebinarCouncilStatics() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="council-right">
        <div>
          <span className="council--span">
            <h5>O'tkazilgan tadbirlar soni</h5>
            <img src={UserIcon} alt="error" />
          </span>
          <h4>250</h4>
          <p>Tadbirlar</p>
        </div>
        <div style={{ marginTop: "15px" }}>
          <span className="council--span">
            <h5>Jami tadbirlar qatnashganlar</h5>
            <img src={UserIcon} alt="error" />
          </span>
          <h4>3505</h4>
          <p>Ishtirokchilari</p>
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