import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import "./Footer";
import FooterBottom from "../../footerBottom/FooterBottom";
import { getContact } from "../../../reduxToolkit/contactSlice/extraReducer";

import logoImg from "../../../assets/images/icons/logo.png";

import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import ContactUs from "../../ContactUs/ContactUs";
import { Link } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const contactData = useSelector((state) => state.contactSlice.contactData);

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  return (
    <>
      <ContactUs />
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
                      <a href="/about">{t("footerAbout")}</a>
                    </li>
                    <li>
                      <a href="/compatriots/public-associations">
                        {t("footerCompatriots")}
                      </a>
                    </li>
                    <li>
                      <a href="/projects">{t("footerProjects")}</a>
                    </li>
                    <li>
                      <a href="/">{t("footerSelections")}</a>
                    </li>
                    <li>
                      <a href="/information-service/mediateka">
                        {t("footerService")}
                      </a>
                    </li>
                    <li>
                      <a href="/contact">{t("footerContact")}</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="/projects/columns?=2">
                        {t("projects_page.item2")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects/columns?=4">
                        {t("projects_page.item3")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects/columns?=5">
                        {t("projects_page.item4")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects/columns?=6">
                        {t("projects_page.item5")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects/columns?=7">
                        {t("projects_page.item6")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects/columns?=10">
                        {t("projects_page.item7")}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-right">
                  <h5>{t("footerOurContacts")}</h5>
                  <p>
                    <FiPhone />{" "}
                    <a href={`tel: ${contactData?.phone}`}>
                      {contactData?.phone}
                    </a>
                  </p>
                  <p>
                    <HiOutlineMail />{" "}
                    <a href={`mailto: ${contactData?.email}`}>
                      {contactData?.email}
                    </a>
                  </p>
                  <div className="icons">
                    <a href={contactData?.facebook}>
                      <FaFacebookF />
                    </a>
                    <a href={contactData?.instagram}>
                      <RiInstagramFill />
                    </a>
                    <a href={contactData?.telegram}>
                      <FaTelegramPlane />
                    </a>
                    <a href={contactData?.youtube}>
                      <BsYoutube />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <FooterBottom />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
