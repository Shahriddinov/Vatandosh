import "./ShareFriends.scss";
import filled from "../../assets/images/icons/filled-icon.svg";
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
import { useState } from "react";

export default function ShareFriends() {
  const [isurlCopy, setisurlCopy] = useState(false);

  const shareUrl = window.location.href;
  const { t } = useTranslation();

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setisurlCopy(true);
  };
  return (
    <div className="sharefriends">
      <div className="sharefriends-list">
        <div className="sharefriends-list-item" onClick={handleCopy}>
          <img src={filled} alt="" />
          <span
            className="sharefriends-list-item-copy"
            style={isurlCopy ? { opacity: 1 } : null}
          >
            Copied!
          </span>
        </div>
        <FacebookShareButton url={shareUrl} className="sharefriends-list-item">
          <RiFacebookFill />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} className="sharefriends-list-item">
          <BsTwitter />
        </TwitterShareButton>
        <TelegramShareButton url={shareUrl} className="sharefriends-list-item">
          <FaTelegramPlane />
        </TelegramShareButton>
      </div>
      <p className="sharefriends-title">{t("share")}</p>
    </div>
  );
}
