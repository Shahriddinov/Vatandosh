import { NotebookImage } from "../../../../../assets/images/victorina";
import { CouncilImage } from "../../../../../assets/images/volunter";
import ShareFriends from "../../../../../component/ShareFriends/ShareFriends";
import CouncilStatics from "../../../expert/pages/ExpertHome/components/Council/CouncilStatics";
import "./VictorinaAbout.scss";

function VictorinaAbout() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-top">
          <h3>Victorinalar haqida</h3>
          <span>
            <a href="/portal-category/victorina">Asosiy</a>
            <p>Batafsil</p>
          </span>
        </div>
        <div className="about-page">
          <div className="about-left">
            <img src={NotebookImage} alt="error" />
            <h3 className="about-title">
              “VATANDOSHLAR” jamg‘armasi qoshidagi xalqaro Viktorinalar
            </h3>
            <p className="about-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised...
            </p>
            <img src={CouncilImage} alt="error" />
            <p className="about-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
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
    </div>
  );
}
export default VictorinaAbout;
