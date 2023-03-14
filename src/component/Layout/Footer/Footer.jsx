import React from "react";
import { useTranslation } from "react-i18next";

import "./Footer";
import FooterBottom from "../../footerBottom/FooterBottom";

import logoImg from "../../../assets/images/icons/logo.png";

import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer_card container">
        <div className="footer-information">
          <div className="footer-top">
            <div className="company-logo">
              <img src={logoImg} alt="logo" />
              <p>{t("footerFund")}</p>
            </div>
            <div className="footer-menu-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">{t("footerAbout")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footerCompatriots")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footerProjects")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footerSelections")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footerService")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footerContact")}</a>
                  </li>
                </ul>
              </div>
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">{t("footerAbout")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footerCompatriots")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footerProjects")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footerSelections")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footerService")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footerContact")}</a>
                  </li>
                </ul>
              </div>
              <div className="footer-right">
                <h5>{t("footerOurContacts")}</h5>
                <p>
                  <FiPhone /> <a href="tel: 0800-120-55 55">0800-120-55 55</a>
                </p>
                <p>
                  <HiOutlineMail />{" "}
                  <a href="mailto: info@Vatandoshlar">info@Vatandoshlar</a>
                </p>
                <div className="icons">
                  <div>
                    <FaFacebookF />
                  </div>
                  <div>
                    <FaTwitter />
                  </div>
                  <div>
                    <RiInstagramFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterBottom />
        </div>
      </div>
    </div>
  );
};

export default Footer;
