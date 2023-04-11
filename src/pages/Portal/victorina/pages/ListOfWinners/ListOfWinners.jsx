import { BsFillArrowDownCircleFill } from "react-icons/bs";
import WinnerCard from "../../components/WinnerCard/WinnerCard";
import "./ListOfWinners.scss";
import TestPopUp from "../../components/TestPopUp/TestPopUp";
import { useTranslation } from "react-i18next";

export default function ListOfWinners() {
  const { t } = useTranslation();
  return (
    <div className="listofwinners">
      <TestPopUp />
      <div className="container">
        <h3 className="listofwinners-title">Viktorina g‘oliblar ro‘yxati</h3>
        <div className="listofwinners-list">
          {[1, 2, 3, 4, 5, 6].map((el) => (
            <WinnerCard key={el} />
          ))}
        </div>
        <div className="listofwinners-moreBtn-wrapper">
          <button className="listofwinners-moreBtn">
            <BsFillArrowDownCircleFill />
            <span>{t("victorina.allwinner")}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
