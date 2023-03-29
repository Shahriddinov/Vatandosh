import {
  CouncilImage,
  UserIcon,
  Globe,
  CopyIcon,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  InstagramIcon,
} from "../../../../assets/images/expert";
import "./About.scss";

const data = [
  {
    id: 1,
    country: "Rossiya",
    number: 24,
  },
  {
    id: 2,
    country: "Turkiya",
    number: 18,
  },
  {
    id: 3,
    country: "Germaniya",
    number: 16,
  },
  {
    id: 4,
    country: "Rossiya",
    number: 8,
  },
  {
    id: 5,
    country: "Malayziya",
    number: 4,
  },
  {
    id: 6,
    country: "Rossiya",
    number: 2,
  },
];

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-top">
          <h3>Kengashi haqida</h3>
          <span>
            <a href="#">Asosiy</a>
            <p>Batafsil</p>
          </span>
        </div>
        <div className="about-page">
          <div className="about-left">
            <img src={CouncilImage} />
            <h3 className="about-title">
              “VATANDOSHLAR” jamg‘armasi qoshidagi xalqaro ekspertlar kengashi
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
                <a href="#" className="about-link">
                  <img src={FacebookIcon} alt="" className="about-icon" />
                </a>
              </li>
              <li className="about-item">
                <a href="#" className="about-link">
                  <img src={TwitterIcon} alt="" className="about-icon" />
                </a>
              </li>
              <li className="about-item">
                <a href="#" className="about-link">
                  <img src={TelegramIcon} alt="" className="about-icon" />
                </a>
              </li>
              <li className="about-item">
                <a href="#" className="about-link">
                  <img src={InstagramIcon} alt="" className="about-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="about-right">
            <div>
              <span>
                <h5>Ro‘yxatdan o‘tganlar</h5>
                <img src={UserIcon} />
              </span>
              <h4>88</h4>
              <p>Xalqaro olimlar va ekspertlar</p>
            </div>
            <div className="council-bottom">
              <span>
                <h5>Xorijiy davlatlar</h5>
                <img src={Globe} />
              </span>
              {data.map((data) => (
                <span className="council-span">
                  <h5>{data.country}</h5>
                  <p>{data.number}</p>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
