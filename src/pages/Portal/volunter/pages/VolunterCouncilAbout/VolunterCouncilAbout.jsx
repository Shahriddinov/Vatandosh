import {
  CopyIcon,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  InstagramIcon,
} from "../../../../../assets/images/expert";
import { CouncilImage } from "../../../../../assets/images/volunter";
import CouncilStatics from "../VolunterHome/components/Council/CouncilStatics";
import "./VolunterCouncilAbout.scss";

function VolunterCouncilAbout() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-top">
          <h3>Volontyorlar haqida</h3>
          <span>
            <a href="#">Asosiy</a>
            <p>Batafsil</p>
          </span>
        </div>
        <div className="about-page">
          <div className="about-left">
            <img src={CouncilImage} />
            <h3 className="about-title">
              “VATANDOSHLAR” jamg‘armasi qoshidagi xalqaro Volontyorlar
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
            <img src={CouncilImage} />
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
            <ul className="about-list">
              <li className="about-item">
                <a href="#" className="about-link">
                  <img src={CopyIcon} alt="" className="about-icon" />
                </a>
              </li>
              <li className="about-item">
                <a href="https://www.facebook.com/" className="about-link">
                  <img src={FacebookIcon} alt="" className="about-icon" />
                </a>
              </li>
              <li className="about-item">
                <a href="https://twitter.com/" className="about-link">
                  <img src={TwitterIcon} alt="" className="about-icon" />
                </a>
              </li>
              <li className="about-item">
                <a href="https://web.telegram.org/k/" className="about-link">
                  <img src={TelegramIcon} alt="" className="about-icon" />
                </a>
              </li>
              <li className="about-item">
                <a href="https://www.instagram.com/" className="about-link">
                  <img src={InstagramIcon} alt="" className="about-icon" />
                </a>
              </li>
            </ul>
          </div>
          <CouncilStatics />
        </div>
      </div>
    </div>
  );
}
export default VolunterCouncilAbout;
