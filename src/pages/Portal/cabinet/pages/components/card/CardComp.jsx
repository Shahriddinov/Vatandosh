import { PORTAL_IMAGE_URL } from "../../../../../../services/api/utils";
import "./CardComp.scss";

const CardComp = ({ el, calendarSvg, eyeSvg }) => {
  console.log(el);
  return (
    <div key={el?.id} className="singleCard">
      <div className="singleCard-imgCont">
        {/* <img src={`${PORTAL_IMAGE_URL}${el?.images[0]}`} alt="img" /> */}
        <img src="https://api.vatandoshlarfondi.uz/storage/meetings/June2023/Q1GSDePdw24w1fRJ6fiv.jpg" alt="act" />
        <span
          // className={el.verified ? "succuss" : "danger"}
          className="succuss"
        >
          {/* {el?.verified ? "принят" : "Отклонен"} */}
          принят
        </span>
      </div>
      <div className="singleCard-bodyCont">
        {/* <h1>{el?.title}</h1> */}{" "}
        <h1>
          O'zbekistonlik Volontyorlar Xitoy vaksinasi klinik sinovlarida
          qatnashmoqda
        </h1>
        {/* <p>{el?.description}</p> */}{" "}
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="singleCard-hrl"></div>
      <div className="singleCard-dateAndViewCont">
        <div>
          <img src={calendarSvg} alt="cal" />
          <span>
            {/* {el?.created_at.slice(0, 10).split("-").reverse().join(".")} */}
            12.02.2023
          </span>
        </div>
        <div>
          <img src={eyeSvg} alt="eye" />
          {/* <span>{el?.views ? el.views : 0}</span> */}
          100 K
        </div>
      </div>
    </div>
  );
};

export default CardComp;
