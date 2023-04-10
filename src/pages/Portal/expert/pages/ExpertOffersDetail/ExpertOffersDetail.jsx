import { useTranslation } from "react-i18next";
import DefaultProfilePic from "../../../../../assets/images/mediateka/2.png";
import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";
import ExpertTitle from "../../components/ExpertTitle/ExpertTitle";
import CouncilStatics from "../ExpertHome/components/Council/CouncilStatics";
import ExpertProfileInfo from "../ExpertOffers/components/ExpertProfileInfo";
import "./ExpertOffersDetail.scss";

export default function ExpertOffersDetail() {
  const { t } = useTranslation();
  const url = [
    { title: t("expert.main"), url: "/portal-category/expert" },
    { title: t("expert.offers"), url: "/portal-category/expert/offers" },
    { title: t("expert.offer"), url: "" },
  ];
  return (
    <main className="expertofferdetail">
      <div className="container">
        <ExpertTitle title={t("expert.offer")} url={url} />
        <div className="expertofferdetail-wrapper">
          <div className="expertofferdetail-main">
            <img src={DefaultProfilePic} alt="error" />
            <ExpertProfileInfo
              profileImg={DefaultProfilePic}
              name={"Xatamov Akbarjon O‘tkir o‘g‘li"}
              address={"Parij, Fransiya"}
              position={"Jurnalistika"}
            />
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
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <ShareFriends />
          </div>
          <div className="expertofferdetail-actions">
            <CouncilStatics />
          </div>
        </div>
      </div>
    </main>
  );
}
