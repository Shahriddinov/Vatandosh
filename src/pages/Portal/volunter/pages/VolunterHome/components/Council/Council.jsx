import "./Council.scss";
import { Link } from "react-router-dom";
import CouncilStatics from "./CouncilStatics";

function Council({ councilData, VolunteerCount }) {
  const dataCount = VolunteerCount.map((el) => el.users).flat();
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
        <CouncilStatics
          count={dataCount.length}
          VolunteerCount={VolunteerCount}
        />
      </div>
    </div>
  );
}
export default Council;
