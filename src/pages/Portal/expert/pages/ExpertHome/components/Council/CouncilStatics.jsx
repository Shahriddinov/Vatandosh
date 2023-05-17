import { useTranslation } from "react-i18next";
import { UserIcon, Globe } from "../../../../../../../assets/images/expert";



function CouncilStatics({ expertCount }) {
  const { t } = useTranslation();
  return (
    <div className="council-right">
      <div>
        <span className="council--span">
          <h5>{t("expert.registered")}</h5>
          <img src={UserIcon} alt="error" />
        </span>
        <h4>{expertCount?.length}</h4>
        <p className="margin_bottom_60">{t("expert.expertsand")}</p>
      </div>
      <div className="council-bottom">
        <span className="council--span">
          <h5>{t("expert.country")}</h5>
          <img src={Globe} alt="error" />
        </span>
        {expertCount?.slice(0, 5)?.map((data) => (
          <span className="council-span" key={data.id}>
            <h5>{data?.name}</h5>
            <p>{data?.users?.length}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default CouncilStatics;
