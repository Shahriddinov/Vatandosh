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
        <span>
          "{el?.quiz?.title}" {el?.position}-o‘rin g‘olibi
        </span>
        <h4>{el?.user?.name}</h4>
        <p>{el.description}</p>
      </div>
    </Link>
  );
}
