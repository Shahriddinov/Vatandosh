import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import logoImg from "../../assets/images/icons/logo.png";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { getContact } from "../../reduxToolkit/contactSlice/extraReducer";
import "./ExpertFooter.scss";
import napaName from "../../assets/images/icons/napa.png";

const ExpertFooter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const contactData = useSelector((state) => state.contactSlice.contactData);

  useEffect(() => {
    dispatch(getContact());
  }, []);

  return (
    <>
      <div className="expertfooter">
        <div className="container">
          <div className="expertfooter-list">
            <div className="company-logo">
              <img src={logoImg} alt="logo" />
              <p>{t("footerFund")}</p>
            </div>
            <div className="expertfooter-item">
              <p>
                <FiPhone />{" "}
                <a href={`tel: ${contactData?.phone}`}>{contactData?.phone}</a>
              </p>
              <p>
                <HiOutlineMail />{" "}
                <a href={`mailto: ${contactData?.email}`}>
                  {contactData?.email}
                </a>
              </p>
            </div>
          </div>

          <div className="expertfooter-page">
            <ul>
              <li>
                <a href="#">Asosiy</a>
              </li>
              <li>
                <a href="#">Ekspertlar kengashi</a>
              </li>
              <li>
                <a href="#">Takliflar</a>
              </li>

              <li>
                <a href="#">Bog‘lanish</a>
              </li>
            </ul>
            <div className="expertfooter-icons">
              <a href={contactData?.facebook}>
                <FaFacebookF />
              </a>
              <a href={contactData?.twitter}>
                <FaTwitter />
              </a>
              <a href={contactData?.instagram}>
                <RiInstagramFill />
              </a>
            </div>
          </div>
          <div className="expertfooter-bottom">
            <div className="footer-company-name">
              <img src={napaName} alt="napa-name" />
            </div>
            <div className="copyright">
              <span>Copyright © 2023 {t("footerFund")}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertFooter;
