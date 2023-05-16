import {
  CopyIcon,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  InstagramIcon,
} from "../../../../../assets/images/expert";
import CouncilStatics from "../VolunterHome/components/Council/CouncilStatics";
import "./VolunterCouncilAbout.scss";
import { Spinner } from "../../../../../component";
import { PORTAL_IMAGE_URL } from "../../../../../services/api/utils";
import { t } from "i18next";
import { Link } from "react-router-dom";
import { useVolunteerCouncilAbout } from "./hooks/useVoulunteerCouncilAbout";

function VolunterCouncilAbout() {
  const {
    volunteers,
    volunteersLoading,
    volunteerPageLoading,
    volunteerPage,
    expertError,
    language,
    VolunteerCountLoading,
    VolunteerCount,
    VolunteerError,
  } = useVolunteerCouncilAbout();

  if (volunteersLoading || volunteerPageLoading || VolunteerCountLoading) {
    return <Spinner position="full" />;
  } else if (expertError || VolunteerError) {
    return <p>{expertError ? expertError : VolunteerError}</p>;
  }

  const findExpertAboutPage = volunteerPage.find((el) => el.type === 2);
  return (
    <div className="about">
      <div className="container">
        <div className="about-top">
          <h3>{t("voluntery.about-title")}</h3>
          <span>
            <Link to="/portal-category/volunteer">
              {t("voluntery.about-url-home")}
            </Link>
            <p>{t("voluntery.about-url-detail")}</p>
          </span>
        </div>
        <div className="about-page">
          <div className="about-left">
            <img
              src={`${PORTAL_IMAGE_URL}${findExpertAboutPage.image}`}
              alt={findExpertAboutPage[`title_${language}`]}
            />
            <h3 className="about-title">
              {findExpertAboutPage[`title_${language}`]}
            </h3>
            <p className="about-text">
              {findExpertAboutPage[`text_${language}`]}
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
          <CouncilStatics
            count={volunteers.total}
            VolunteerCount={VolunteerCount}
          />
        </div>
      </div>
    </div>
  );
}
export default VolunterCouncilAbout;
