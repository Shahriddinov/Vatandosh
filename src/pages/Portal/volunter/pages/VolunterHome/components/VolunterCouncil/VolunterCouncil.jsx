import {
  ArrowIcon,
  ExcludeIcon,
} from "../../../../../../../assets/images/expert";
import { data } from "../../data";
import "./VolunterCouncil.scss";
import { Link } from "react-router-dom";

function Volunter() {
  return (
    <div className="expert">
      <div className="container">
        <h2>Volontyorlar</h2>
        <div className="volunter-list">
          {data.map((evt) => (
            <div key={evt.id}>
              <img src={evt.images} alt="error" />
              <p>{evt.country}</p>
              <h3>{evt.name}</h3>
              <h4>{evt.job}</h4>
              <h4>{evt.location}</h4>
              <Link className="employe-link" to="profile/1">
                <span>Batafsil</span>
                <img src={ArrowIcon} alt="Arrow Icon" />
              </Link>
            </div>
          ))}
        </div>
        <div className="expert-item">
          <Link to="volunter-employe" className="expert-link">
            <img src={ExcludeIcon} alt="error" />
            Barcha olim va ekspertlar
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Volunter;
