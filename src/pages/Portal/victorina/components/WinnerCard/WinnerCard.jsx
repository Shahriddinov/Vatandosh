import "./WinnerCard.scss";
import img from "../../../../../assets/images/portal/2.png";
import { Link } from "react-router-dom";

export default function WinnerCard() {
  return (
    <Link to={"/portal-category/victorina/winner"} className="winnercard">
      <img src={img} alt="error" />
      <div className="winnercard-desc">
        <span> "ZIYOUZ VIKTORINASI" 1-o‘rin g‘olibi</span>
        <h4>Xayitboev Nurali</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised...
        </p>
      </div>
    </Link>
  );
}
