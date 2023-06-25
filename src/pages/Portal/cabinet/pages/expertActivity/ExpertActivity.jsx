import "./expertActivity.scss";
import { useState } from "react";
import calendarSvg from "../../../../../assets/images/portal/cabinetVolunteer/calendar.svg";
import eyeSvg from "../../../../../assets/images/portal/cabinetVolunteer/eye.svg";
import BtnComp from "../components/btn/BtnComp";
import CardComp from "../components/card/CardComp";
import { useCabinetVolunteerFetching } from "../volunteering/hooks/useCabinetVoluneerFetching";
import { Spinner } from "../../../../../component";
import { filteredArrFun } from "../volunteering/extra";
import { useCabinetExpertActivity } from "./hooks/useCabinetExpertActivity";
import { useTranslation } from "react-i18next";

const ExpertActivity = () => {
  const { t } = useTranslation();
  const [activeBtn, setActiveBtn] = useState({ id: 1, type: "all" });
  const { error, loading, data } = useCabinetExpertActivity();

  if (loading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  } else if (data.length === 0) {
    return <p>{t("wordNone")}</p>;
  }

  const handleBtn = (el) => {
    setActiveBtn({ id: el.id, type: el.type });
  };

  const filteredArr = filteredArrFun(data, activeBtn.type);

  const btnGroup = [
    { id: 1, label: t("all"), type: "all" },
    { id: 2, label: t("success"), type: "success" },
    { id: 3, label: t("danger"), type: "danger" },
  ];

  return (
    <div className="container-expert">
      <div className="container-expert-inner">
        <div className="container-expert-inner_btnContainer">
          {btnGroup.map((el) => (
            <BtnComp
              el={el}
              activeBtn={activeBtn}
              handleBtn={handleBtn}
              key={el.id}
            />
          ))}
        </div>
        <div className="container-expert-inner_cardContainer">
          {filteredArr.map((el, index) => (
            <CardComp
              el={el}
              calendarSvg={calendarSvg}
              eyeSvg={eyeSvg}
              key={el?.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertActivity;
