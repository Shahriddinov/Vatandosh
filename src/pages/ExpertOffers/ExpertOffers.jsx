import "./ExpertOffers.scss";
import DefaultProfilePic from "../../assets/images/mediateka/2.png";
import { Link } from "react-router-dom";
import ExpertTitle from "../Portal/pages/Expert/components/ExpertTitle/ExpertTitle";
import { BsArrowDownCircleFill } from "react-icons/bs";
import ExpertProfileInfo from "./components/ExpertProfileInfo";

export default function ExpertOffers() {
  const url = [
    { title: "Asosiy", url: "/expert" },
    { title: "Takliflar", url: "/expert/offers" },
  ];

  return (
    <main className="expertoffer">
      <div className="container">
        <ExpertTitle title={"Takliflar"} url={url} />
        <div className="expertoffer-list">
          <div className="expertoffer-list-item">
            <img src={DefaultProfilePic} alt="error" />
            <div className="expertoffer-list-item-desc">
              <ExpertProfileInfo
                profileImg={DefaultProfilePic}
                name={"Xatamov Akbarjon O‘tkir o‘g‘li"}
                address={"Parij, Fransiya"}
                position={"Jurnalistika"}
              />
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
                Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
              <div className="expertoffer-list-item-desc-button">
                <button>
                  <Link to={""}>Batafsil</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="expertoffer-list-item">
            <img src={DefaultProfilePic} alt="error" />
            <div className="expertoffer-list-item-desc">
              <ExpertProfileInfo
                profileImg={DefaultProfilePic}
                name={"Xatamov Akbarjon O‘tkir o‘g‘li"}
                address={"Parij, Fransiya"}
                position={"Jurnalistika"}
              />
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
                Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
              <div className="expertoffer-list-item-desc-button">
                <button>
                  <Link to={""}>Batafsil</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="expertoffer-list-morebtn">
            <button>
              <BsArrowDownCircleFill />
              <span>Barcha takliflar</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
