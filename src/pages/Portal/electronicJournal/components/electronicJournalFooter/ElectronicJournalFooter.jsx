import React from "react";
import FooterLogo from "../../../../../assets/images/online-teaching/FooterLogo.svg";
import Phones from "../../../../../assets/images/online-teaching/phones.png";
import Email from "../../../../../assets/images/online-teaching/mail.svg";
import Facebook from "../../../../../assets/images/online-teaching/facebook.svg";
import Twitter from "../../../../../assets/images/online-teaching/twitter.svg";
import Instagram from "../../../../../assets/images/online-teaching/intagram.svg";
import Napa from "../../../../../assets/images/online-teaching/Napa.png";
import "./electronicJournalFooter.scss";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function ElectronicJournalFooter({ contactData }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="electronic-journal-footer">
      <div className="container">
        <div className="electronic-journal-footer__inner">
          <div className="electronic-journal-footer_boxes ">
            <img
              src={FooterLogo}
              alt=""
              className="electronic-journal-footer__logo"
              onClick={() => navigate("/portal")}
            />
            <div className="electronic-journal-footer___boxes_list">
              <div className="electronic-journal-footer_boxes_ended_step">
                <Link
                  to="/portal-category/cabinet"
                  className="electronic-journal-footer_boxes_ended_step_division"
                >
                  {" "}
                  {t("about_uzbekistan.navbar.nav1")}
                </Link>
                <Link
                  to="/portal-category/online-teaching"
                  className="electronic-journal-footer_boxes_ended_step_division"
                >
                  {" "}
                  {t("about_uzbekistan.navbar.nav2")}
                </Link>
                <Link
                  to="/portal-category/webinar"
                  className="electronic-journal-footer_boxes_ended_step_division"
                >
                  {" "}
                  {t("about_uzbekistan.navbar.nav3")}
                </Link>
                <Link
                  to="/portal-category/electronic-journal"
                  className="electronic-journal-footer_boxes_ended_step_division"
                >
                  {" "}
                  {t("about_uzbekistan.navbar.nav4")}
                </Link>
                <Link
                  to="/portal-category/cabinet"
                  className="electronic-journal-footer_boxes_ended_step_division"
                >
                  {" "}
                  {t("about_uzbekistan.navbar.nav5")}
                </Link>
              </div>

              <div className="electronic-journal-footer_boxes_end">
                <div className="flexes">
                  <div className="electronic-journal-footer_boxes_end_contacts">
                    {t("about_uzbekistan.contact")}
                  </div>
                  <div className="electronic-journal-footer_boxes_end_phones">
                    <img src={Phones} alt="" />
                    <div className="electronic-journal-footer_boxes_end_phones_number">
                      <a href={`tel:${contactData?.phone}`}>
                        {contactData?.phone}
                      </a>
                    </div>
                  </div>
                  <div className="electronic-journal-footer_boxes_end_phones">
                    <img src={Email} alt="" />
                    <div className="electronic-journal-footer_boxes_end_phones_number">
                      <a href={`mailto:${contactData?.email}`}>
                        {contactData?.email}
                      </a>
                    </div>
                  </div>
                  <div className="electronic-journal-footer_boxes_end_phones">
                    <a href={contactData?.facebook} target="blank">
                      <img src={Facebook} alt="Facebook link" />
                    </a>

                    <a href={contactData?.twitter} target="blank">
                      <img src={Twitter} alt="Twitter link" />
                    </a>

                    <a href={contactData?.instagram} target="blank">
                      <img src={Instagram} alt="Instagram link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="" />

          <div className="electronic-journal-footer_production ">
            <img
              className="electronic-journal-footer_production_napa"
              src={Napa}
              alt=""
            />
            <div className="electronic-journal-footer_production_napa_year">
              Copyright © 2023 Vatandoshlar jamoat fondi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectronicJournalFooter;
