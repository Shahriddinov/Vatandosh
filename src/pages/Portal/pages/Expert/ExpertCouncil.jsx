import "./ExpertCouncil.scss";
import Navbar from "../../components/Navbar/Navbar";
import Nav from "../../components/Nav/Nav";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Expert from "./components/Expert/Expert";
import Council from "./components/Council/Council";
import ExpertFooter from "../../components/ExpertFooter/ExpertFooter";

function ExpertCouncil() {
  return (
    <>
      <div className="expert-council">
        <Navbar />
        <Nav />
        <Header />
      </div>
      <Council />
      <Expert />
      <News />
      {/* <ExpertFooter /> */}
    </>
  );
}
export default ExpertCouncil;
