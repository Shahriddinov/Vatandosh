import "./WinnerCard.scss";
import { Link } from "react-router-dom";
import { imageUrl } from "../../../../../../services/api/utils";
import { useTranslation } from "react-i18next";

export default function WinnerCardVictorina({ el, title, volunterById }) {
  const { t } = useTranslation();
  return (
    <Link
      key={el.id}
      to={`/portal-category/victorina/winner/${volunterById}/${el?.id}`}
      className="winnercard">
      <img src={`${imageUrl}/${el?.user.avatar}`} alt="error" />
      <div className="winnercard-desc">
        <span>
          {" "}
          "{title}" {el?.position}-{t("winner")}
        </span>
        <h4>{el?.user?.name}</h4>
        <p>{el.description}</p>
      </div>
    </Link>
  );
}
