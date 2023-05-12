import "./WinnerCard.scss";
import img from "../../../../../assets/images/portal/2.png";
import { Link } from "react-router-dom";
import { imageUrl } from "../../../../../services/api/utils";

export default function WinnerCard({ el }) {
  return (
    <Link
      to={`/portal-category/victorina/winner/${el?.id}`}
      className="winnercard">
      <img src={`${imageUrl}/${el?.user.avatar}`} alt="error" />
      <div className="winnercard-desc">
        <span> "ZIYOUZ VIKTORINASI" {el?.position}-o‘rin g‘olibi</span>
        <h4>{el?.user?.name}</h4>
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
