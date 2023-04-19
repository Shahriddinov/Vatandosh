import "./OnlineWebinar.scss";
import "../../../victorina/pages/VictorinaProject/VictorinaProject.scss";
import { ExpertTitle } from "../../../expert/components";
import { useTranslation } from "react-i18next";
import CouncilStatics from "../../../expert/pages/ExpertHome/components/Council/CouncilStatics";
import img from "../../../../../assets/images/portal/5.png";
import { useLocation } from "react-router-dom";
import ExpertProfileInfo from "../../../expert/pages/ExpertOffers/components/ExpertProfileInfo";
import { ShareFriends } from "../../../../../component";

export default function OnlineWebinar() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const url = [
    { title: t("expert.main"), url: "" },
    { title: t("webinar.webinars"), url: "" },
  ];

  return (
    <>
      <main className="online-webinar">
        <div className="container">
          <ExpertTitle title={t("webinar.online-webinar")} url={url} />
          <div className="online-webinar-wrapper">
            <div className="online-webinar-main">
              <div className="victorinaproject-main">
                <img src={img} alt="error" />
                {pathname.includes("finished-projects") ? (
                  <button className="victorinaproject-main-btn">
                    {t("victorina.endproject")}
                  </button>
                ) : (
                  <>
                    <div className="victorinaproject-main-timer">
                      <div>
                        <span>7</span>
                        <span>Kun</span>
                      </div>
                      <div>
                        <span>12</span>
                        <span>Soat</span>
                      </div>
                      <div>
                        <span>45</span>
                        <span>Daqiqa</span>
                      </div>
                    </div>
                    <button className="victorinaproject-main-btn victorinaproject-main-btnActive">
                      {t("webinar.join-webinar")}
                    </button>
                  </>
                )}
                <ExpertProfileInfo
                  profileImg={img}
                  name={"Muqimov Otabek"}
                  address={"Cпикер"}
                  position={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                  }
                />
                <div className="victorinaproject-main-desc">
                  <h3>Onlayn vebinarni o’tkazishdan maqsadi</h3>
                  <div className="victorinaproject-main-desc-action">
                    <div className="victorinaproject-main-desc-action-date">
                      <span className="online-webinar-date">
                        {t("webinar.date")}
                      </span>
                      <span>12.02.2023</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <ShareFriends />
            </div>
            <CouncilStatics />
          </div>
        </div>
      </main>
    </>
  );
}
