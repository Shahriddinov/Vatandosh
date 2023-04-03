import "./ShareFriends.scss";
import filled from "../../assets/images/icons/filled-icon.svg";
import { RiFacebookFill, RiInstagramFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";

export default function ShareFriends() {
  const shareUrl = window.location.href;
  const { t } = useTranslation();

  return (
    <div className="sharefriends">
      <div className="sharefriends-list">
        <a href="https://www.google.com" className="sharefriends-list-item">
          <img src={filled} alt="" />
        </a>
        <FacebookShareButton url={shareUrl} className="sharefriends-list-item">
          <RiFacebookFill />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} className="sharefriends-list-item">
          <BsTwitter />
        </TwitterShareButton>
        <TelegramShareButton url={shareUrl} className="sharefriends-list-item">
          <FaTelegramPlane />
        </TelegramShareButton>
        <a
          href={"https://www.instagram.com"}
          className="sharefriends-list-item"
        >
          <RiInstagramFill />
        </a>
      </div>
      <p className="sharefriends-title">{t("share")}</p>
    </div>
  );
}
