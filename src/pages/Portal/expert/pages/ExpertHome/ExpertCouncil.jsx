import "./ExpertCouncil.scss";
import Navbar from "../../components/Navbar/Navbar"; //components/Navbar/Navbar
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import News from "./components/News/News";
import Council from "./components/Council/Council";
import Expert from "./components/ExpertCouncil/ExpertCouncil";

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
    </>
  );
}
export default ExpertCouncil;
