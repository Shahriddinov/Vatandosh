import { BsFillArrowDownCircleFill } from "react-icons/bs";
import WinnerCard from "../../components/WinnerCard/WinnerCard";
import "./ListOfWinners.scss";
import TestPopUp from "../../components/TestPopUp/TestPopUp";

export default function ListOfWinners() {
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
            <span>Barcha g‘oliblar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
