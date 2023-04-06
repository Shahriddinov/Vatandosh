import { CouncilImage } from "../../../../../../../assets/images/expert";
import "./Council.scss";
import { Link } from "react-router-dom";
import CouncilStatics from "./CouncilStatics";

function Council() {
  return (
    <div className="council">
      <div className="container">
        <div className="council-left">
          <img src={CouncilImage} />
          <h3>
            “VATANDOSHLAR” jamg‘armasi qoshidagi xalqaro ekspertlar kengashi
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised...
          </p>
          <div>
            <Link to="/portal-category/expert/council-about">Batafsil</Link>
          </div>
        </div>
        <CouncilStatics />
      </div>
    </div>
  );
}
export default Council;
