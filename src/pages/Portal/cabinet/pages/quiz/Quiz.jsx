import { useState } from "react";
import { fakeBodyData, dataBtn } from "../components/fakedata";
import calendarSvg from "../../../../../assets/images/portal/cabinetVolunteer/calendar.svg";
import eyeSvg from "../../../../../assets/images/portal/cabinetVolunteer/eye.svg";
import BtnComp from "../components/btn/BtnComp";
import CardComp from "../components/card/CardComp";

import "./quiz.scss";

const Quiz = () => {
  const [activeBtn, setActiveBtn] = useState("Barchasi");
  const [data, setData] = useState(fakeBodyData);
  const [filteredData, setFilteredData] = useState(fakeBodyData);
  const handleBtn = (name, index) => {
    setActiveBtn(dataBtn[index]);
    if (name === "Barchasi") {
      setFilteredData(data);
      return;
    }
    setFilteredData(data.filter((el) => el.status === name));
  };
  return (
    <div className="container-quiz">
      <div className="container-quiz-inner">
        <div className="container-quiz-inner_btnContainer">
          {dataBtn.map((el, index) => (
            <BtnComp
              key={index}
              el={el}
              index={index}
              activeBtn={activeBtn}
              handleBtn={handleBtn}
            />
          ))}
        </div>
        <div className="container-quiz-inner_cardContainer">
          {filteredData.map((el, index) => (
            <CardComp
              key={index}
              el={el}
              index={index}
              fakeBodyData={fakeBodyData}
              calendarSvg={calendarSvg}
              eyeSvg={eyeSvg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
