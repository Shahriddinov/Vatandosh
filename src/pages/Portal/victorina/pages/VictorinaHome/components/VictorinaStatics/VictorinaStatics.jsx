import { useTranslation } from "react-i18next";
import { Globe, UserIcon } from "../../../../../../../assets/images/expert";
import { Spinner } from "../../../../../../../component";

function VictorinaStatics({ pageData }) {
  const { t } = useTranslation();

  let expertNumber = 0;

  pageData?.locations?.map((data) => {
    expertNumber += data.count;
  });

  const newArr = pageData.locations;

  return (
    <div className="council-right">
      <div>
        <span className="council--span">
          <h5>{t("expert.registered")}</h5>
          <img src={UserIcon} alt="error" />
        </span>
        <h4>{expertNumber}</h4>
        <p>{t("expert.expertsand")}</p>
      </div>
      <div className="council-bottom">
        <span className="council--span">
          <h5>{t("expert.country")}</h5>
          <img src={Globe} alt="error" />
        </span>
        {newArr
          ?.slice()
          .sort((a, b) => b.count - a.count)
          .map((data) => (
            <span className="council-span" key={data.id}>
              <h5>{data.name}</h5>
              <p>{data.count}</p>
            </span>
          ))}
      </div>
    </div>
  );
}

export default VictorinaStatics;
