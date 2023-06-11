import React, { useState } from "react";
import { motion } from "framer-motion";
import "./volunteering.scss";
// Images and svgs >>>

import calendarSvg from "../../../../../assets/images/portal/cabinetVolunteer/calendar.svg";
import eyeSvg from "../../../../../assets/images/portal/cabinetVolunteer/eye.svg";
// Components card and btn
import BtnComp from "../components/btn/BtnComp";
import CardComp from "../components/card/CardComp";

import { useCabinetVolunteerFetching } from "./hooks/useCabinetVoluneerFetching";
import { Pagination, Spinner } from "../../../../../component";
import { someDataFun } from "./extra";

const btns = [
  { id: 1, label: "Barchasi", type: "all" },
  { id: 2, label: "принят", type: "success" },
  { id: 3, label: "Отклонен", type: "danger" },
];

const Volunteering = () => {
  const [activeBtn, setActiveBtn] = useState({ id: 1, type: "all" });
  const [activePage, setActivePage] = useState(1);
  const { error, volunteerOneData, volunteerOneLoading } =
    useCabinetVolunteerFetching();

  if (volunteerOneLoading) {
    return <Spinner position="full" />;
  } else if (error) {
    return <p>{error}</p>;
  } else if (volunteerOneData.length === 0) {
    return <p>Hozirda ma'lumot mavjud emas</p>;
  }

  const handleBtn = (el) => {
    setActiveBtn({ id: el.id, type: el.type });
  };

  const paginationFetching = (value) => {
    setActivePage(value);
  };

  const { someData, totalPagination } = someDataFun({
    arr: volunteerOneData[0]?.user_volunteer_activities,
    type: activeBtn.type,
    count: 3,
    activePage: activePage,
  });

  return (
    <div className="container-volunteering">
      <div className="container-volunteering-inner">
        <div className="container-volunteering-inner_btnContainer">
          {btns.map((el) => (
            <BtnComp
              el={el}
              activeBtn={activeBtn}
              handleBtn={handleBtn}
              key={el.id}
            />
          ))}
        </div>

        <div className="container-volunteering-inner_cardContainer">
          {someData?.map((el) => (
            <CardComp
              el={el}
              calendarSvg={calendarSvg}
              eyeSvg={eyeSvg}
              activeBtn={activeBtn}
            />
          ))}
        </div>
        {totalPagination >= 2 ? (
          <Pagination
            page={activePage}
            paginationFetching={paginationFetching}
            count={totalPagination}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Volunteering;
