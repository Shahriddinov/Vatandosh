import ExpertTitle from "../../../expert/components/ExpertTitle/ExpertTitle";
import CouncilStatics from "../VolunterHome/components/Council/CouncilStatics";
import img from "../../../../../assets/images/mediateka/4.png";
import "./VolunterActivityDetail.scss";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";

export default function VolunterActivityDetail() {
  const url = [
    { title: "Asosiy", url: "/portal-category/volunteer" },
    { title: "Volontyorlar ishlari", url: "#" },
  ];

  return (
    <main className="volunteractivitydetail">
      <div className="container">
        <ExpertTitle title={"Volontyorlarni faoliyati"} url={url} />
        <div className="volunteractivitydetail-main">
          <div className="volunteractivitydetail-main-detail">
            <div className="volunteractivitydetail-main-detail-desc-img">
              <img src={img} alt="" />
            </div>
            <div className="volunteractivitydetail-main-detail-desc-action">
              <div className="volunteractivitydetail-main-detail-desc-action-date-viewers">
                <div className="volunteractivitydetail-main-detail-desc-action-date">
                  <BsFillCalendar2EventFill />
                  <span>{"12.02.2023"}</span>
                </div>
                <div className="volunteractivitydetail-main-detail-desc-action-viewers">
                  <AiFillEye />
                  <span>{"100 K"}</span>
                </div>
              </div>
              <div className="volunteractivitydetail-main-detail-desc-action-tags">
                {[
                  "Volontyorlar faoliyati",
                  "Yosh sportchi volontyorlar",
                  "Volontyorlar",
                ].map((el, index) => {
                  return <span key={index}>{el}</span>;
                })}
              </div>
            </div>
            <h3 className="volunteractivitydetail-main-detail-title">
              “FOOD SUPPLIES” Haftaligida qatnashish uchun Volontyorlarni
              yig‘moqda
            </h3>
            <div className="volunteractivitydetail-main-detail-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <ShareFriends />
          </div>
          <CouncilStatics />
        </div>
      </div>
    </main>
  );
}
