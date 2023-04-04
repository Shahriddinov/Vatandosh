import ExpertTitle from "../Portal/pages/Expert/components/ExpertTitle/ExpertTitle";
import DefaultProfilePic from "../../assets/images/mediateka/2.png";
import "./ExpertOffersDetail.scss";
import ExpertProfileInfo from "../ExpertOffers/components/ExpertProfileInfo";
import ShareFriends from "../../component/ShareFriends/ShareFriends";

export default function ExpertOffersDetail() {
  const url = [
    { title: "Asosiy", url: "/expert" },
    { title: "Takliflar", url: "/expert/offers" },
    { title: "Taklif", url: "/expert/offerts" },
  ];
  return (
    <main className="expertofferdetail">
      <div className="container">
        <ExpertTitle title={"Taklif"} url={url} />
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
        </div>
      </div>
    </main>
  );
}