import { useState } from "react";
import DefaultProfilePic from "../../../../../assets/images/mediateka/2.png";
import img3 from "../../../../../assets/images/mediateka/3.png";
import img4 from "../../../../../assets/images/mediateka/4.png";
import img5 from "../../../../../assets/images/mediateka/5.png";
import img6 from "../../../../../assets/images/mediateka/6.png";
import img7 from "../../../../../assets/images/mediateka/7.png";
import img8 from "../../../../../assets/images/mediateka/8.png";
import ExpertTitle from "../../../expert/components/ExpertTitle/ExpertTitle";
import ExpertProfileInfo from "../../../expert/pages/ExpertOffers/components/ExpertProfileInfo";
import CouncilStatics from "../VolunterHome/components/Council/CouncilStatics";
import "./VolunterArticleDetail.scss";
import { ShareFriends } from "../../../../../component";

export default function VolunterArticleDetail() {
  const [mainImg, setMainImg] = useState(DefaultProfilePic);

  const url = [
    { title: "Asosiy", url: "/portal-category/volunter" },
    { title: "Volonyorlik faoliyat", url: "#" },
    { title: "Maqola", url: "#" },
  ];
  return (
    <main className="volunterarticledetail">
      <div className="container">
        <ExpertTitle title={"Maqola"} url={url} />
        <div className="volunterarticledetail-wrapper">
          <div className="volunterarticledetail-main">
            <img src={mainImg} alt="error" />
            <ul className="volunterarticledetail-main-imgList">
              {[img3, img4, img5, img6, img7, img8].map((el, index) => (
                <li key={index} onClick={() => setMainImg(el)}>
                  <img src={el} alt="error" />
                </li>
              ))}
            </ul>
            <ExpertProfileInfo
              profileImg={DefaultProfilePic}
              name={"Xatamov Akbarjon O‘tkir o‘g‘li"}
              address={"Parij, Fransiya"}
              position={"Jurnalistika"}
            />
            <p className="volunterarticledetail-main-title">
              1. “O‘zbekiston zamini” ilmiy-amaliy va innovatsion maqola
            </p>
            <p className="volunterarticledetail-main-text">
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
          <div className="volunterarticledetail-actions">
            <CouncilStatics />
          </div>
        </div>
      </div>
    </main>
  );
}
