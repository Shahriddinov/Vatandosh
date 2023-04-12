import React from "react";
import FooterLogo from "../../../../../assets/images/online-teaching/FooterLogo.svg";
import Phones from "../../../../../assets/images/online-teaching/phones.png";
import Email from "../../../../../assets/images/online-teaching/mail.svg";
import Facebook from "../../../../../assets/images/online-teaching/facebook.svg";
import Twitter from "../../../../../assets/images/online-teaching/twitter.svg";
import Instagram from "../../../../../assets/images/online-teaching/intagram.svg";
import Napa from "../../../../../assets/images/online-teaching/Napa.png";
import "./onlineTeachingFooter.scss";
function OnlineTeachingFooter(props) {
  return (
    <div className="OnlineTeachingFooter">
      <div className="OnlineTeachingFooter_boxes container">
        <div className="OnlineTeachingFooter_boxes_ended">
          <img src={FooterLogo} alt="" />
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
        </div>
        <div className="OnlineTeachingFooter_boxes_end">
          <div className="flexes">
            <div className="OnlineTeachingFooter_boxes_end_contacts">
              Bizning kontaktlarimiz
            </div>
            <div className="OnlineTeachingFooter_boxes_end_phones">
              <img src={Phones} alt="" />
              <div className="OnlineTeachingFooter_boxes_end_phones_number">
                +998(55)502-22-99
              </div>
            </div>
            <div className="OnlineTeachingFooter_boxes_end_phones">
              <img src={Email} alt="" />
              <div className="OnlineTeachingFooter_boxes_end_phones_number">
                info@Vatandoshlar
              </div>
            </div>
            <div className="OnlineTeachingFooter_boxes_end_phones">
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
              <img src={Instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr className="container" />

      <div className="OnlineTeachingFooter_production container">
        <img className="OnlineTeachingFooter_production_napa" src={Napa} alt="" />
        <div className="OnlineTeachingFooter_production_napa_year">
        Copyright © 2023 Vatandoshlar jamoat fondi
        </div>
      </div>
    </div>
  );
}

export default OnlineTeachingFooter;
