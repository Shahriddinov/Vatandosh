import React, { useEffect } from "react";
import FooterLogo from "../../../../../assets/images/online-teaching/FooterLogo.svg";
import Phones from "../../../../../assets/images/online-teaching/phones.png";
import Email from "../../../../../assets/images/online-teaching/mail.svg";
import Facebook from "../../../../../assets/images/online-teaching/facebook.svg";
import Twitter from "../../../../../assets/images/online-teaching/twitter.svg";
import Instagram from "../../../../../assets/images/online-teaching/intagram.svg";
import Napa from "../../../../../assets/images/online-teaching/Napa.png";
import "./onlineTeachingFooter.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../../../../reduxToolkit/contactSlice/extraReducer";
import { Link } from "react-router-dom";

function OnlineTeachingFooter(props) {
  const { t } = useTranslation();
  const { contactData } = useSelector((state) => state.contactSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);
  return (
    <div className="OnlineTeachingFooter">
      <div className="container">
        <div className="OnlineTeachingFooter__inner">
          <div className="OnlineTeachingFooter_boxes ">
            <img
              src={FooterLogo}
              alt=""
              className="OnlineTeachingFooter__logo"
            />
            <div className="OnlineTeachingFooter___boxes_list">
              <div className="OnlineTeachingFooter_boxes_ended_step">
                <p className="OnlineTeachingFooter_boxes_ended_step_division">
                  {" "}
                  Online kurslar
                </p>
                <p className="OnlineTeachingFooter_boxes_ended_step_division">
                  {" "}
                  Elektron kutubxona
                </p>
                <p className="OnlineTeachingFooter_boxes_ended_step_division">
                  {" "}
                  Vebinarlar
                </p>
                <p className="OnlineTeachingFooter_boxes_ended_step_division">
                  {" "}
                  E’lonlar
                </p>
                <p className="OnlineTeachingFooter_boxes_ended_step_division">
                  {" "}
                  Shaxsiy kabinet
                </p>
              </div>

              <div className="OnlineTeachingFooter_boxes_end">
                <div className="flexes">
                  <div className="OnlineTeachingFooter_boxes_end_contacts">
                    {t("footerOurContacts")}
                  </div>
                  <div className="OnlineTeachingFooter_boxes_end_phones">
                    <img src={Phones} alt="" />
                    <div className="OnlineTeachingFooter_boxes_end_phones_number">
                      {contactData?.phone}
                    </div>
                  </div>
                  <div className="OnlineTeachingFooter_boxes_end_phones">
                    <img src={Email} alt="" />
                    <div className="OnlineTeachingFooter_boxes_end_phones_number">
                      {contactData?.email}
                    </div>
                  </div>
                  <div className="OnlineTeachingFooter_boxes_end_phones">
                    <Link to={contactData?.facebook}>
                      <img src={Facebook} alt="" />
                    </Link>
                    <Link to={contactData?.twitter}>
                      <img src={Twitter} alt="" />
                    </Link>
                    <Link to={contactData?.instagram}>
                      <img src={Instagram} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="" />

          <div className="OnlineTeachingFooter_production ">
            <a href="https://napaautomotive.uz/" target="_blank">
              <img
                className="OnlineTeachingFooter_production_napa"
                src={Napa}
                alt=""
              />
            </a>
            <div className="OnlineTeachingFooter_production_napa_year">
              Copyright © 2023 Vatandoshlar jamoat fondi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineTeachingFooter;
