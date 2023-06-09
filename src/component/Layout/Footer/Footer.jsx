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
  const lan = useSelector((state) => state.language.language);
  const data = useSelector((store) => store.singleSlice.projectsData);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const contactData = useSelector((state) => state.contactSlice.contactData);

  useEffect(() => {
    if (!Object.keys(contactData)?.length) {
      dispatch(getContact());
    }
  }, [dispatch, contactData]);

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
                    {data?.map((el) => (
                      <li key={el?.id}>
                        <Link to={`/projects/columns?=${el?.id}`}>
                          {el[`menu_${lan}`]}
                        </Link>
                      </li>
                    ))}
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
