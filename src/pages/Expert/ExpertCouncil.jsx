import Navbar from "../../component/Navbar/Navbar";
import Nav from "../../component/Nav/Nav";
import Header from "./components/Header/Header";
import Expert from "./components/Expert/Expert";
import Council from "./components/Council/Council";
import News from './components/News/News';
import "./ExpertCouncil.scss";
import ExpertFooter from "../../component/ExpertFooter/ExpertFooter";

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
