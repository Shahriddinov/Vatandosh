import Navbar from "../../component/Navbar/Navbar";
import Nav from "../../component/Nav/Nav";
import Header from "./components/Header/Header";
import Expert from "./components/Expert/Expert";
import Council from "./components/Council/Council";
import News from './components/News/News';
import "./ExpertCouncil.scss";

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
