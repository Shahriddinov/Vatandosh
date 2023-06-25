import { useLocation, useNavigate } from "react-router-dom";
import { PORTAL_IMAGE_URL } from "../../../../../../services/api/utils";
import "./CardComp.scss";

const CardComp = ({ el, calendarSvg, eyeSvg }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const matchPath = pathname.split("/")[3] === "expert-activity";
  return (
    <div
      key={el?.id} //"/portal-category/volunteer/activity/"
      className="singleCard"
      onClick={() =>
        navigate(
          `/portal-category/${matchPath ? "expert" : "volunteer"}/activity/` +
            el?.id
        )
      }
    >
      <div className="singleCard-imgCont">
        <img src={`${PORTAL_IMAGE_URL}${el?.images[0]}`} alt="img" />
        <span className={el?.verified ? "succuss" : "danger"}>
          {el?.verified ? "принят" : "Отклонен"}
        </span>
      </div>
      <div className="singleCard-bodyCont">
        <h1>{el?.title}</h1>
        <p>{el?.description}</p>
      </div>
      <div className="singleCard-hrl"></div>
      <div className="singleCard-dateAndViewCont">
        <div>
          <img src={calendarSvg} alt="cal" />
          <span>
            {el?.created_at.slice(0, 10).split("-").reverse().join(".")}
          </span>
        </div>
        <div>
          <img src={eyeSvg} alt="eye" />
          <span>{el?.viewers > 0 ? el.viewers : 0}</span>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
