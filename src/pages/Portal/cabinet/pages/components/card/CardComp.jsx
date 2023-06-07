import { PORTAL_IMAGE_URL } from "../../../../../../services/api/utils";
import "./CardComp.scss";

const CardComp = ({ el, calendarSvg, eyeSvg }) => {
  return (
    <div key={el?.id} className="singleCard">
      <div className="singleCard-imgCont">
        <img src={`${PORTAL_IMAGE_URL}${el?.images[0]}`} alt="img" />
        <span className={el.verified ? "succuss" : "danger"}>
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
          <span>{el?.views ? el.views : 0}</span>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
