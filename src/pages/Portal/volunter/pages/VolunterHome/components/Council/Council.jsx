import { CouncilImage } from "../../../../../../../assets/images/volunter";
import "./Council.scss";
import { Link } from "react-router-dom";
import CouncilStatics from "./CouncilStatics";

function Council({ councilData }) {
  return (
    <div className="council">
      <div className="container">
        <div className="council-left">
          <img src={councilData?.image} alt="img" />
          <h3>{councilData?.title}</h3>
          <p>{councilData?.desc}</p>
          <div>
            <Link to={councilData.pathUrl}>Batafsil</Link>
          </div>
        </div>
        <CouncilStatics />
      </div>
    </div>
  );
}
export default Council;
