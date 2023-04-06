import "./ExpertCouncil.scss";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import News from "./components/News/News";
import Council from "./components/Council/Council";
import Expert from "./components/ExpertCouncil/ExpertCouncil";
import { useOutletContext } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import backImg from "../../../../../assets/images/expert/bgexpert.png";

function ExpertCouncil() {
  const { navData, navbarUrl } = useOutletContext();
  const headerData = {
    title: "“VATANDOSHLAR” EKSPERTLAR KENGASHI",
    subTitle: "Vatandosh ekspertlar kengashining elektron platformasi",
    link: "/portal-category/expert/register",
  };

  return (
    <>
      <div
        className="expert-council"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <Navbar navbarUrl={navbarUrl} />
        <Nav navData={navData} />
        <Header headerData={headerData} />
      </div>
      <Council />
      <Expert />
      <News />
    </>
  );
}
export default ExpertCouncil;
