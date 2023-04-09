import About from "../../components/About/About";
import { aboutData } from "./data";

function AboutCouncil() {
  return (
    <div>
      <About aboutData={aboutData} />
    </div>
  );
}
export default AboutCouncil;
