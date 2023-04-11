import { useTranslation } from "react-i18next";
import ExpertTitle from "../../../expert/components/ExpertTitle/ExpertTitle";
import img from "../../../../../assets/images/portal/4.png";
import "./VictorinaWinner.scss";
import CouncilStatics from "../../../expert/pages/ExpertHome/components/Council/CouncilStatics";
import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";

export default function VictorinaWinner() {
  const { t } = useTranslation();

  const url = [
    { title: t("expert.main"), url: "/portal-category/victorina" },
    { title: t("victorina.end"), url: "" },
    { title: t("victorina.bestimgproject"), url: "" },
    { title: t("victorina.winner"), url: "" },
  ];

  return (
    <main className="victorinawinner">
      <div className="container">
        <ExpertTitle title={t("victorina.winner")} url={url} />
        <div className="victorinawinner-wrapper">
          <div className="victorinawinner-main">
            <img src={img} alt="error" />
            <div className="victorinawinner-main-profile">
              <img src={img} alt="error" />
              <div className="victorinawinner-main-profile-desc">
                <p>Xayitboev Nurali</p>
                <span>1-o‘rin g‘olibi</span>
              </div>
            </div>
            <h3>{t("victorina.winnerprice")}</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <ShareFriends />
          </div>
          <CouncilStatics />
        </div>
      </div>
    </main>
  );
}
